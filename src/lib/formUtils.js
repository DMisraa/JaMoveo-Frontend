export function handleInputChange(e, setter) {
    if (e && e.target && typeof setter === 'function') {
      setter(e.target.value);
    } else {
      console.error("handleInputChange received invalid arguments:", { event: e, setter });
    }
  }