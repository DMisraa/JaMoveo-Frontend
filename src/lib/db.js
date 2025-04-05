export async function handleSignup(username, password, instrument, admin) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, instrument, admin }),
      }
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Error Messege:", err);
  }
}

export async function handleLogin(username, password) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error during login request:", err);
  }
}

export async function searchSong(query) {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/search?query=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during search:", error);
  }
}

// lib/api/fetchSongDetails.js

export async function fetchSongDetails(songUrl, instrument) {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/search/playSong?query=${encodeURIComponent(
        songUrl
      )}&instrument=${encodeURIComponent(instrument)}`
    );
    const data = await res.json();

    if (data.imageUrl && !data.imageUrl.startsWith("https://")) {
      data.imageUrl = "https://www.tab4u.com" + data.imageUrl;
    }

    return data;
  } catch (error) {
    console.error("Error fetching song details:", error);
    return null;
  }
}
