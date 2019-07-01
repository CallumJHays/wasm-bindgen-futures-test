# WASM-bindgen-futures aint workin' for me

This repo exemplifies my issue.

# Clone & Run it

```bash
git clone https://github.com/CallumJHays/wasm-bindgen-futures-test
cd wasm-bindgen-futures-test
yarn # install
rimraf dist pkg && webpack-dev-server --open -d # run
```

# The Code

[src/lib.rs](./src/lib.rs):

```rust
use wasm_bindgen::prelude::*;
use js_sys::Promise;
use wasm_bindgen_futures::JsFuture;

// This is like the `main` function, except for JavaScript.
#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    // This provides better error messages in debug mode.
    // It's disabled in release mode so it doesn't bloat up the file size.
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();


    // Your code goes here!
    JsFuture::from(promise_true());

    Ok(())
}

#[wasm_bindgen(module = "/src/promise_true.js")]
extern "C" {
    fn promise_true() -> Promise;
}
```

[src/promise_true.js](./src/lib.rs):

```javascript
export const promise_true = async () => {
  console.log("promise_true() successfully called from Rust");
  return true;
};
```

It all compiles fine.

# Output

This is the runtime error I experience:

<image src="./wasm_bindgen_future_bugreport.png">

Help? 🐱
