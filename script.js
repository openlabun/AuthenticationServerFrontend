const apiBaseUrl = 'https://authenticationapp.mangocoast-ed120e36.eastus.azurecontainerapps.io';


document.getElementById('create-contract-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const app_name = document.getElementById('contract-app-name').value;

    try {
        const response = await fetch(`${apiBaseUrl}/create-contract?app_name=${app_name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            document.getElementById('create-contract-result').innerText = 'Error creating contract';
        } else {
            const result = await response.json();
            console.log(result);
            document.getElementById('create-contract-result').innerText = JSON.stringify(result);
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('create-contract-result').innerText = 'Error creating contract2';
    }
});

document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const contract_key = document.getElementById('reg-contract-key').value;
    const username = document.getElementById('reg-username').value;
    const first_name = document.getElementById('reg-firstname').value;
    const last_name = document.getElementById('reg-lastname').value;
    const password = document.getElementById('reg-password').value;

    try {
        const response = await fetch(`${apiBaseUrl}/register?contract_key=${contract_key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, first_name, last_name, password })
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Error registering user');
        }

        document.getElementById('register-result').innerText = JSON.stringify(result);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('register-result').innerText = error.message || 'Error registering user2';
    }


});

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const app_name = document.getElementById('login-app-name').value;
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch(`${apiBaseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, app_name })
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Error logging in');
        }

        document.getElementById('login-result').innerText = JSON.stringify(result);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('login-result').innerText = error.message || 'Error logging in2';
    }
});

document.getElementById('get-users-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const contract_key = document.getElementById('users-contract-key').value;

    try {
        const response = await fetch(`${apiBaseUrl}/users?contract_key=${contract_key}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const users = await response.json();
        if (!response.ok) {
            throw new Error(result.detail || 'Error fetching users');
        }

        document.getElementById('users-list').innerText = JSON.stringify(users);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('users-list').innerText = error.message || 'Error fetching users2';
    }
});

document.getElementById('delete-contract-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const contract_key = document.getElementById('delete-contract-key').value;

    try {
        const response = await fetch(`${apiBaseUrl}/delete-contract?contract_key=${contract_key}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Error deleting contract');
        }

        document.getElementById('delete-contract-result').innerText = JSON.stringify(result);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('delete-contract-result').innerText = error.message || 'Error deleting contract2';
    }
});

document.getElementById('delete-users-contract-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const contract_key = document.getElementById('delete-users-contract-key').value;

    try {
        const response = await fetch(`${apiBaseUrl}/delete-all?contract_key=${contract_key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Error deleting users');
        }

        document.getElementById('delete-users-contract-result').innerText = JSON.stringify(result);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('delete-users-contract-result').innerText = error.message || 'Error deleting users2';
    }
});
