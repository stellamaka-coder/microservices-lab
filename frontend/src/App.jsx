import { useEffect, useState } from "react";
export default function App() {
const [users, setUsers] = useState([]);
const [videos, setVideos] = useState([]);
const [error, setError] = useState("");
useEffect(() => {
Promise.all([fetch("/api/users"), fetch("/api/videos")])
.then(async ([u, v]) => {
if (!u.ok || !v.ok) throw new Error("API request failed");
setUsers(await u.json()); setVideos(await v.json());
}).catch(e => setError(e.message));
}, []);
return <main style={{fontFamily:"sans-serif",padding:24}}>
<h1>Microservices Lab</h1>
{error && <p role="alert">Error: {error}</p>}
<h2>Users</h2><ul>{users.map(u => <li key={u.id}>{u.name} ({u.email}){u.age != null ? `,
Age: ${u.age}` : ""}</li>)}</ul>
<h2>Videos</h2><ul>{videos.map(v => <li key={v.id}>{v.title}{v.duration ? ` —
${v.duration}` : ""}</li>)}</ul>
</main>;
}
