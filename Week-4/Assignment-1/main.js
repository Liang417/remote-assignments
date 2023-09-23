// callback
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    const result = n1 + n2;
    callback(result);
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

// promise
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n1 + n2;
      resolve(result);
    }, delayTime);
  });
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

// async/await
async function main() {
  const result = await delayedResultPromise(100, 200, 4000);
  console.log(result);
}
main(); // 300 will be shown in the console after 4 seconds;
