export default function scb2promise(fn) {
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
