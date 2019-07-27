
// PW-2

let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    // 0. Add at least 10 more videos to the above array and before writing the following programs in JS.
    {
        title: "Arrays javascript",
        lengthInMinutes: 8,
        category: "Education",
        uploadDate: new Date("07-23-2019"),
        tags: "array definition, array format , array methods",
        features: ["on recording", "180°", "HDR"],
        viewCount: 250,
        rating: 3.2
    },
    {
        title: "Canvas animation",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("04-19-2011"),
        tags: "css, fun",
        features: ["Subtitles/CC", "2D"],
        viewCount: 1001,
        rating: 2.7
    },
    {
        title: "Drama cheekh Episode # 27",
        lengthInMinutes: 45,
        category: "Entertainment",
        uploadDate: new Date("07-20-2019"),
        tags: "women empowerment, speak truth, raise voice against women's voilence",
        features: ["om recording", "2D"],
        viewCount: 15006,
        rating: 7.8
    },
    {
        title: "How to create a function in javascript",
        lengthInMinutes: 10,
        category: "Education",
        uploadDate: new Date("23-07-2019"),
        tags: "javascript, web development",
        features: ["on recording", "2D"],
        viewCount: 120,
        rating: 4.5
    },
    {
        title: "The wall china",
        lengthInMinutes: 7,
        category: "Entertainment",
        uploadDate: new Date("07-02-2019"),
        tags: "for enjoyment, funny",
        features: ["on recording", "3D", "HD"],
        viewCount: 108937,
        rating: 7.8
    },
    {
        title: "How to make Balochi tikka boti",
        lengthInMinutes: 5,
        category: "cooking",
        uploadDate: new Date("09-17-2018"),
        tags: "cooking",
        features: ["Live", "2D"],
        viewCount: 4005,
        rating: 6.2
    },
    {
        title: "Text filling with water",
        lengthInMinutes: 5,
        category: "Education",
        uploadDate: new Date("12-12-2011"),
        tags: "cool css, web development",
        features: ["on recording", "2D"],
        viewCount: 1114,
        rating: 5.6
    },
    {
        title: "Ummon hiyaton",
        lengthInMinutes: 2.5,
        category: "Entertainment",
        uploadDate: new Date("05-19-2013"),
        tags: "song",
        features: ["on recording", "2D"],
        viewCount: 7847639,
        rating: 5.5
    },
    {
        title: "How to create calculator in Javascript",
        lengthInMinutes: 7,
        category: "Education",
        uploadDate: new Date("05-09-2015"),
        tags: "javascript",
        features: ["on recording", "2D"],
        viewCount: 1234,
        rating: 9.8
    },
    {
        title: "The roller coaster",
        lengthInMinutes: 5,
        category: "Entertainment",
        uploadDate: new Date("07-02-2019"),
        tags: "enjoyment, funny",
        features: ["on recording", "3D", "HD"],
        viewCount: 89763,
        rating: 7.9
    },
];
/*
   1. Print each video in this format:
      Title: Photoshop tutorial
      Length: 70 minutes
      Category: Education
      Views: 4,700
      Uploaded On: 22-July-2019
      Rating:
*/
let months = [
    "January", "Fabruary", "March", "April",
    "May", "June", "July", "August",
    "September", "Octuber", "november", "December"
]

for (let i = 0; i < videos.length; i++) {
    console.log("Title: " + videos[i].title + "\nLength: " + videos[i].lengthInMinutes +
        "\nCategory: " + videos[i].category +
        "\nViews: " + videos[i].viewCount +
        "\nUploaded on: " +
        videos[i].uploadDate.getDate() + "-" +
        months[videos[i].uploadDate.getMonth()] + "-" +
        videos[i].uploadDate.getFullYear() +
        "\nRating: " + videos[i].rating);
}

// 2. Print titles of all short ( less than 3 minutes ) videos.
for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes < 3) {
        console.log("Title: " + videos[i].title)
    }
}

// 3. Print titles of all long ( greater than 20 minutes ) videos.
for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 20) {
        console.log("Title: " + videos[i].title)
    }
}

// 4. Print titles of all medium length videos.
for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 5 && videos[i].lengthInMinutes < 10) {
        console.log("Title: " + videos[i].title)
    }
}

// 5. Print title of the longest video
// for (let i = 0; i < videos.length; i++) {
//     if (Math.max(videos[i].lengthInMinutes)) {
//         console.log("Title: " + videos[i].title);
//     }
// }

// 6. Print titles of all "Educational" videos
// for (let i = 0; i < videos.length; i++) {
//     if (videos[i].category == "Education") {
//         console.log("Title: " + videos[i].title)
//     }
// }

// 7. Print titles of all videos with tag "Javascript"
for (let i = 0; i < videos.length; i++) {
    if (videos[i].tags == "javascript") {
        console.log("Title: " + videos[i].title)
    }
}

// 8. Print titles of all videos with HD feature
for (let i = 0; i < videos.length; i++) {
    if (videos[i].features["2"] == "HD") {
        console.log("Title: " + videos[i].title)
    }
} // problem ---> if an item placed at diff index then how to get

// 13. Sort the array in ascending order of number of views and print the titles
for (let i = 0; i < videos.length; i++) {
        // if (videos[i].viewCount.sort()) {
            console.log(videos[i].viewCount.sort()+"Title: " + videos[i].title)
        
    }