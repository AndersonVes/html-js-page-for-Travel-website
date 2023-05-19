let position = 1
let testmonialLength = 0

const reset = () => {
    for (let index = 1; index <= testmonialLength; index++) {
        if (index > 3)
            document.getElementById(`idTestimonial-${index}`).style.display = 'none'
        else
            document.getElementById(`idTestimonial-${index}`).style.display = 'flex'
    }
    position = 1
}

const getTestmonials = async () => {
    const URL = 'https://646700cf2ea3cae8dc236c37.mockapi.io/Testimonials'
    const testimonialsDiv = document.getElementById('testimonials')

    try {
        const response = await fetch(URL);
        const testmonialsData = await response.json();

        testmonialsData.forEach(e => {
            testimonialsDiv.innerHTML += `<div class="testimony" id="idTestimonial-${e.id}">
            <img src="${e.avatar}" alt="${e.firstName}">
                <h4>${e.firstName}</h4>
                <p>${e.testimony}.</p>
            </div>`
        });

        testmonialLength = testmonialsData.length
        reset()

    } catch (error) {
        console.error(`API error: ${error.message}`);
    }
}


const clickArrow = () => {
    if (testmonialLength <= 0)
        return

    let display = position == 1 ? 'none' : 'flex'
    for (let index = 1; index <= testmonialLength; index++) {
        document.getElementById(`idTestimonial-${index}`).style.display = display

        if(index == 3)
            display = display == 'none' ? 'flex' : 'none'
    }


    position = position < 2 ? 2 : 1
}

onload = getTestmonials()