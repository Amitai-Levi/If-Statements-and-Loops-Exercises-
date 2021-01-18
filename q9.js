for (let i = 1; i < 10; i++) {
  for (let x = 0; x < 10; x++) {
    for (let z = 0; z < 10; z++) {
      if (
        Math.pow(z, 3) + Math.pow(x, 3) + Math.pow(i, 3) ===
        z + x * 10 + i * 100
      )
        console.log(z + x * 10 + i * 100);
    }
  }
}
