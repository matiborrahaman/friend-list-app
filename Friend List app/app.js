const name = document.getElementById('name');
const career = document.getElementById('career');
const biography = document.getElementById('biography');
const btn = document.querySelector('.btn');
const friendList = document.getElementById('friend-list');

btn.addEventListener('click', function(e){
   e.preventDefault();
    // console.log('hello');

    if(name.value=="" && career.value==""&& biography.value==""){
        alert('Please input your information.');
    }
    else{
        const newRow = document.createElement('tr');
        // console.log(newRow);
        const newName = document.createElement('th');
        newName.innerHTML = name.value;
        newRow.appendChild(newName);

        const newCareer = document.createElement('th');
        newCareer.innerHTML = career.value;
        newRow.appendChild(newCareer);

        const newBiography = document.createElement('th');
        newBiography.innerHTML = biography.value;
        newRow.appendChild(newBiography);

        friendList.appendChild(newRow);
}
})