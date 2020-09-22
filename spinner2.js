const chars = ['|', '/', '-', '\\','|', '/', '-', '\\','|', '/', '-', '\\'];

for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${chars[i]}   `);
  }, 200 + i * 200);
}
