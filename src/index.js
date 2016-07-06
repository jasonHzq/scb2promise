export default function cb2promise(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, res) => {
        if (err) {
          reject(err);
        }

        resolve(res);
      });
    });
  };
};
