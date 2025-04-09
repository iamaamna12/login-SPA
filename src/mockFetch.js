export const mockFetch = (url, options) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { email, password } = JSON.parse(options.body);
  
        if (email === "test@example.com" && password === "password123") {
          resolve({ ok: true });
        } else {
          resolve({ ok: false });
        }
      }, 1000);
    });
  };
  