let serverPrefix = 'http://rest.learncode.academy/api/cbula'

function createTask(title) {
    return fetch(serverPrefix + '/tasks', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            title: title
        })
    })
}


function displayTasks(tasks) {
    var list = document.querySelector('#tasks');
    list.innerHTML = '';
    tasks.sort((a, b) => b.title > a.title).forEach(function (task) {
        var listItem = document.createElement('li');
        var taskTitleInput = document.createElement('a');
        taskTitleInput.innerText = task.title;

        listItem.appendChild(taskTitleInput);
        list.appendChild(listItem)
    })

}

function getTasks() {
    fetch(serverPrefix + '/tasks').then(
        response => {
        if (response.ok) {
        return response.json()
    }
    throw new Error('nope')
}).then(
        displayTasks
    ).catch(
        error => console.log(error.message)
)
}
