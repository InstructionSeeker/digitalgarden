// Put your computations here.

// src/helpers/userUtils.js

function userComputed(data) {
  // ✅ Safe logging (only show first few items, so logs don’t explode)
  if (data?.collections?.note) {
    console.log(
      "userComputed received notes:",
      data.collections.note.slice(0, 3).map((n) => ({
        title: n.data.title,
        icon: n.data.noteIcon,
        url: n.url,
      }))
    );
  } else {
    console.log("userComputed received data (no notes):", Object.keys(data || {}));
  }

  // ✅ Return something minimal to avoid build errors
  return {
    forest: {
      trees: [],
      legends: [],
    },
  };
}

// Export so other files can `require` it
module.exports = { userComputed };
