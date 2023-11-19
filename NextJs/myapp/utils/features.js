

export const getAllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{
    cache: "no-cache"
  });

  if (!res.ok) return new Error("something went wrong");

  return await res.json();
};

// this no cache for ssr 
