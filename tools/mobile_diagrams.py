"""Build single-column phone variants of the site's two-panel diagrams.

Panels are restacked into a 480-wide viewBox and text is enlarged so labels
render at roughly 11-17px on a 343px-wide phone column. Captions are rewrapped.
Output: images/<name>-mobile.svg. Run from the repo root.
"""
import re, textwrap, sys

FONT = "system-ui,-apple-system,'Segoe UI',Roboto,sans-serif"
W = 480


def text_el(x, y, s, size, fill="#1b2430", weight=None, anchor=None):
    a = f' text-anchor="{anchor}"' if anchor else ""
    w = f' font-weight="{weight}"' if weight else ""
    s = s.replace("&", "&amp;").replace("<", "&lt;")
    return f'<text x="{x}" y="{y}"{a} font-family="{FONT}" font-size="{size}"{w} fill="{fill}">{s}</text>'


def split_top(svg):
    """Return (head, title_text, panels[(inner)], defs) for translate-group SVGs."""
    defs = re.search(r"  <defs>.*?</defs>", svg, re.S).group(0)
    title = re.search(r'<text x="30" y="38"[^>]*>(.*?)</text>', svg).group(1)
    panels = []
    for m in re.finditer(r'\n  <g transform="translate\((\d+),(\d+)\)">\n(.*?)\n  </g>', svg, re.S):
        panels.append(m.group(3))
    return defs, title, panels


def grouped(name, img_h, label_fixes=()):
    src = open(f"images/{name}.svg", encoding="utf-8").read()
    defs, title, panels = split_top(src)
    out, y = [], 0
    # title, wrapped
    title = title.replace("&amp;", "&")
    for i, line in enumerate(textwrap.wrap(title, 40)):
        out.append("  " + text_el(20, 34 + i * 28, line, 19, "#55606e", 600))
        y = 34 + i * 28
    y += 28
    for p in panels:
        captions = re.findall(r'\n\s*<text x="0" y="(\d+)"[^>]*font-size="15"[^>]*>(.*?)</text>', "\n" + p)
        body = re.sub(r'\n\s*<text x="0" y="\d+"[^>]*font-size="15"[^>]*>.*?</text>', "", "\n" + p).lstrip("\n")
        body = body.replace('font-size="21"', 'font-size="24"')

        # status pill: widen for the bigger font
        def pill(m):
            w = int(m.group(1)); nw = round(w * 16 / 14) + 8
            return f'<rect x="0" y="34" width="{nw}" height="30" rx="15"'
        body = re.sub(r'<rect x="0" y="34" width="(\d+)" height="26" rx="13"', pill, body)
        pw = re.search(r'<rect x="0" y="34" width="(\d+)"', body)
        if pw:
            body = re.sub(r'<text x="\d+" y="52" text-anchor="middle"([^>]*)font-size="14"',
                          lambda m: f'<text x="{int(pw.group(1)) // 2}" y="55" text-anchor="middle"{m.group(1)}font-size="16"', body)
        body = body.replace('<g transform="translate(8,74)">', '<g transform="translate(8,80)">')
        body = re.sub(r'font-size="1[34]"', 'font-size="16"', body)
        for a, b in label_fixes:
            body = body.replace(a, b)
        cap = " ".join(t for _, t in captions).replace("&amp;", "&")
        lines = textwrap.wrap(cap, 38)
        cy = 80 + img_h + 36
        caps = "\n".join("    " + text_el(0, cy + i * 25, l, 18) for i, l in enumerate(lines))
        out.append(f'  <g transform="translate(20,{y})">\n{body}\n{caps}\n  </g>')
        y += cy + (len(lines) - 1) * 25 + 40
    h = y
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {h}" width="{W}" height="{h}" role="img">\n'
           f'{defs}\n\n  <rect width="{W}" height="{h}" fill="#ffffff"/>\n' + "\n\n".join(out) + "\n</svg>\n")
    open(f"images/{name}-mobile.svg", "w", encoding="utf-8", newline="\n").write(svg)
    return W, h


def fence():
    src = open("images/fence-retaining-vs-freestanding-diagram.svg", encoding="utf-8").read()
    defs = re.search(r"  <defs>.*?</defs>", src, re.S).group(0)
    a = src.index("  <!-- ============ PANEL A")
    b = src.index("  <!-- ============ PANEL B")
    e = src.rindex("</svg>")
    pa, pb = src[a:b], src[b:e]
    bump = {"15": "19", "16": "19", "17": "20", "18": "21", "27": "28"}
    fix = lambda s: re.sub(r'(<text x="\d+" y=")76"', r'\g<1>84"', re.sub(r'font-size="(\d+)"', lambda m: f'font-size="{bump.get(m.group(1), m.group(1))}"', s))
    w, ph = 500, 560
    h = ph * 2 + 10
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">\n'
           f'{defs}\n\n  <rect width="{w}" height="{h}" fill="#ffffff"/>\n'
           f'  <line x1="30" y1="{ph}" x2="470" y2="{ph}" stroke="#e3e8ed" stroke-width="2"/>\n'
           f'{fix(pa)}\n  <g transform="translate(-500,{ph})">\n{fix(pb)}  </g>\n</svg>\n')
    open("images/fence-retaining-vs-freestanding-diagram-mobile.svg", "w", encoding="utf-8", newline="\n").write(svg)
    return w, h


if __name__ == "__main__":
    print("lintel", grouped("lintel-vs-movement-crack-diagram", 260, [
        ('<rect x="318" y="132" width="92" height="24" rx="6"', '<rect x="306" y="130" width="112" height="28" rx="6"'),
        ('<text x="364" y="148"', '<text x="362" y="149"'),
    ]))
    print("toothing", grouped("toothing-in-vs-butt-joint-diagram", 260))
    print("crack", grouped("crack-types-diagram", 218))
    print("fence", fence())
