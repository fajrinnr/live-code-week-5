
class Comic {

    static templateTable(img, title, author){
        return  `<div class="card text-center">  
                <img
                src="${img}"
                class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Author: ${author}</p>
                <button class="btn btn-primary">Edit</button>
                </div>
            </div>`
    }

    static list(){
        $.ajax({
            headers: {access_token: localStorage.getItem('access_token')},
            method: "GET",
            url: `${url}/comics`,
        })
        .done(response => {
            console.log(response)
            $('#listComic').empty()
            response.forEach(comic => {
                let comicData = Comic.templateTable(comic.imageUrl, comic.title, comic.author)
                $('#listComic').append(comicData)
            })
        })
        .catch(error => {
            console.log(error)
        })

    }

    static beforeEdit(id, e){
        e.preventDefault()
        let dataValue = $('#updateComic').serialize()
        $.ajax({
            headers: {access_token: localStorage.getItem('access_token')},
            method: "PUT",
            url: `${url}/comics/${id}`,
            data: dataValue,
            dataType: 'json'
        })
        .done(response => {

        })
        .catch(error => {

        })
    }

    
}