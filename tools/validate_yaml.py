from pathlib import Path
import yaml
import sys
import traceback
p = Path(r"c:\Users\Mohammad\Documents\QuarzProject\Quartz\.github\workflows\deploy.yml")
text = p.read_text(encoding="utf-8")
try:
    yaml.safe_load(text)
    print("YAML OK")
except Exception:
    traceback.print_exc()
    sys.exit(2)
