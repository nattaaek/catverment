use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn square_area(a_side: i32, b_side: i32) -> i32 {
    a_side * b_side
}

#[test]
fn square_area_test() {
    assert_eq!(6, square_area(2, 3));
}
