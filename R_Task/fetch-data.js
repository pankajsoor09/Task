document.getElementById("fetch-btn").addEventListener("click", fetchData);

async function fetchData() {
    const container = document.getElementById("data-container");
    

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch data");

        const users = await response.json();


        container.innerHTML = users.map(user => `
            <div class="card">
                <h3>Name: ${user.name }</h3>
                <p><strong>Username:</strong> ${user.username }</p>
                <p><strong>Email:</strong> ${user.email }</p>
                <p><strong>Contact No:</strong> ${user.phone }</p>
                <p><strong>Company:</strong> ${user.company.name  }</p>
            </div>
        `).join('');

    } catch (error) {
        container.innerHTML = `<p id="error-message" style="color: red;">${error.message}</p>`;
    }
}


