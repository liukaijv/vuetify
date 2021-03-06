function load (cb) {
  if (document.readyState === 'complete') {
    return setTimeout(cb, 0)
  }

  if (document.readyState === 'interactive') {
    return setTimeout(() => load(cb), 500)
  }

  document.addEventListener('DOMContentLoaded', cb)
}

export default load