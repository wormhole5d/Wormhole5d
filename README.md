# Wormhole5D

5D resonance field + stochastic traversal simulator.  
**Public Domain (CC0)** – use, modify, share freely.

```python
import numpy as np

def resonance_field_5D(steps=100, peak=5.0, decay=0.02):
    t = np.arange(steps)
    peak_pos = steps // 8
    field = peak * np.exp(-decay * (t - peak_pos)**2)
    field += 0.2 * np.sin(2 * np.pi * t / steps * 5)
    return np.clip(field, 0.1, None)

def traverse_5D(steps=150, seed=None):
    if seed: np.random.seed(seed)
    field = resonance_field_5D(steps)
    inc = np.random.normal(0, 1, steps) * np.sqrt(field)
    return np.cumsum(inc), field

