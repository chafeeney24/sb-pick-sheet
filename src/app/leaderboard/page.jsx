"use client";

import { useEffect, useState } from "react";

export default function Leaderboard() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/leaderboard")
            .then((res) => res.json())
            .then((data) => {
                // Map over the submissions to ensure each one has a 'points' property.
                // Here we assume that the picks object might include a 'points' field.
                // If not, default to 0.
                const scoredSubmissions = data.submissions.map((submission) => ({
                    ...submission,
                    // Assuming that if a points property is stored, it's inside the picks object.
                    // Otherwise, default to 0.
                    points: submission.picks.points || 0
                }));
                setSubmissions(scoredSubmissions);
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
                            <strong>{submission.userName}</strong> – {submission.points} points
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
