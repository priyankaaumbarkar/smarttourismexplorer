// ======================
// 🌍 PLACE DETAILS DATA
// ======================
const placeDetails = {
    paris: {
        name: "Paris",
        desc: "Eiffel Tower, romantic city",
        img: "images/paris.jpg",
        history: "Paris is the capital of France, known for art and culture.",
        extra: "Famous for Eiffel Tower and Louvre Museum."
    },
    dubai: {
        name: "Dubai",
        desc: "Luxury shopping",
        img: "images/dubai.jpg",
        history: "Dubai transformed from desert to global city.",
        extra: "Home to Burj Khalifa."
    },
    goa: {
        name: "Goa",
        desc: "Beaches & nightlife",
        img: "images/goa.jpg",
        history: "Goa was a Portuguese colony till 1961.",
        extra: "Famous for beaches and parties."
    },
    manali: {
        name: "Manali",
        desc: "Snow mountains",
        img: "images/manali.jpg",
        history: "Named after sage Manu.",
        extra: "Popular hill station."
    },
    london: {
        name: "London",
        desc: "Historic city",
        img: "images/london.jpg",
        history: "London has over 2000 years of history.",
        extra: "Famous for Big Ben."
    },
    newyork: {
        name: "New York",
        desc: "City that never sleeps",
        img: "images/newyork.jpg",
        history: "Originally called New Amsterdam.",
        extra: "Famous for Times Square."
    }
};

// ======================
// 📍 SHOW PLACE DETAILS
// ======================
function showDetails(place) {

    document.getElementById("list-view").style.display = "none";
    document.getElementById("details-view").style.display = "block";

    document.getElementById("place-name").innerText = placeDetails[place].name;
    document.getElementById("place-desc").innerText = placeDetails[place].desc;
    document.getElementById("place-img").src = placeDetails[place].img;
    document.getElementById("place-history").innerText =
        "History: " + placeDetails[place].history;
    document.getElementById("place-extra").innerText =
        "More Info: " + placeDetails[place].extra;
}

// 🔙 Back button
function goBack() {
    document.getElementById("list-view").style.display = "block";
    document.getElementById("details-view").style.display = "none";
}


// ======================
// 🏨 HOTEL BOOKING LOGIC
// ======================

// ✅ Check Availability
function checkAvailability() {

    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const message = document.getElementById("availability-msg");

    if (!checkin || !checkout) {
        message.innerText = "⚠️ Please select both dates!";
        message.style.color = "orange";
        return;
    }

    if (checkout <= checkin) {
        message.innerText = "⚠️ Check-out must be after Check-in!";
        message.style.color = "orange";
        return;
    }

    const available = Math.random() > 0.3;

    if (available) {
        message.innerText = "✅ Rooms Available!";
        message.style.color = "green";
    } else {
        message.innerText = "❌ Rooms Not Available!";
        message.style.color = "red";
    }
}


// 💳 Payment Function
function proceedPayment() {

    const room = document.getElementById("roomType").value;
    const guests = document.getElementById("guests").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (!checkin || !checkout) {
        alert("⚠️ Please select booking dates first!");
        return;
    }

    if (checkout <= checkin) {
        alert("⚠️ Invalid dates selected!");
        return;
    }

    alert(
        "🎉 Booking Confirmed!\n\n" +
        "Room Type: " + room.toUpperCase() + "\n" +
        "Guests: " + guests + "\n" +
        "Check-in: " + checkin + "\n" +
        "Check-out: " + checkout + "\n\n" +
        "💳 Payment Successful!"
    );
}