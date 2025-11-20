from pathlib import Path
p = Path(r"c:\Users\Mohammad\Documents\QuarzProject\Quartz\.github\workflows\deploy.yml")
s = p.read_text('utf-8')
for i, ch in enumerate(s):
    if ord(ch) < 32 and ch not in ('\n','\r','\t'):
        print(f"Non-printable char at index {i}: ord={ord(ch)} repr={repr(ch)}")
        break
else:
    print('No control chars <32 (except \n \r \t)')
# Also show any non-ascii chars >127
nonascii = [(i,ord(ch),ch) for i,ch in enumerate(s) if ord(ch)>127]
if nonascii:
    print('Non-ascii chars found (first 20):')
    for item in nonascii[:20]:
        print(item)
else:
    print('No non-ascii chars')
