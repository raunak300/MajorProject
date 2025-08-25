import React from 'react';

const PublicCard = () => {
    const events = [
        {
            VENT_ID: 1,
            Title: "Music Festival",
            description: "An outdoor music festival with live bands and food trucks.",
            comments: ["Awesome event!", "Had a great time!", "Looking forward to next year!"]
        },
        {
            VENT_ID: 2,
            Title: "Tech Conference",
            description: "A conference for tech enthusiasts and professionals.",
            comments: ["Very informative.", "Loved the keynote session!", "Great networking opportunity."]
        },
        {
            VENT_ID: 3,
            Title: "Art Exhibition",
            description: "An exhibition showcasing modern art pieces from local artists.",
            comments: ["Beautiful artwork.", "Very inspiring!", "Would love to see more."]
        }
    ];

    return (
        <div className="flex flex-col gap-6 p-6 bg-purple-950/90 min-h-screen">
            {events.map((event) => (
                <div
                    key={event.VENT_ID}
                    className="bg-blue-900/50 text-white p-6 rounded-xl shadow-lg w-2/3 mx-auto"
                >
                    <div className="text-xl font-bold mb-2">{event.Title}</div>
                    <div className="mb-2">{event.description}</div>
                    <div className="text-xs opacity-80 mb-4">Event ID: {event.VENT_ID}</div>
                    <div>
                        <div className="font-bold mb-2 border-b border-white pb-1">Comments</div>
                        <div className="flex flex-col gap-2">
                            {event.comments.map((cmt, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-600 p-2 rounded-lg text-sm"
                                >
                                    {cmt}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PublicCard;
