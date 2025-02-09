"use client";

import { useEffect, useState } from "react";

export default function Leaderboard() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/leaderboard")
            .then((res) => res.json())
            .then((data) => {
                setSubmissions(data.submissions);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching leaderboard:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {submissions.map((submission) => (
                        <li key={submission.id} className="mb-2">
                            <strong>{submission.name}</strong> – Submitted at {submission.createdAt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
