import React, { Component, PropTypes } from 'react'
import CSS from '../style/fade.scss'
import ScrollMagic from 'ScrollMagic'

class Fade extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let controller = new ScrollMagic.Controller();

    // create a scene
    new ScrollMagic.Scene({
            duration: 100,  // the scene should last for a scroll distance of 100px
            offset: 50      // start this scene after scrolling for 50px
        })
        .setPin("#my-sticky-element") // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller
  }

  render() {
    return (
      <div>
        <div className={CSS.section + " " + CSS.section0} id="my-sticky-element" >
          <h1>Introduction</h1>
          <p>
            If we look back in history, it seems pretty obvious that human beings care about their skin. And why shouldn’t we? As the largest organ of the body, the epidermis (the scientific name for skin) serves an extremely important role of keeping the bodies’ moisture in while keeping foreign material out. It does this by having a protective layer of lipids that coat the body and protect the top layer of skin. When we work and play in our daily lives, the daily activities will often strip our skin of this protective layer. This is why the skin can benefit from the use of a moisturizer at times. Moisturizers contain oil-soluble molecules that help to restore the skin to its natural condition. There are hundreds of different moisturizers from manufacturers that promise to do everything from restoring your face’s natural moisture to making age lines and wrinkles disappear. If a product can really do this, wouldn’t it be in your best interest to get the best possible brand to enhance your skin? Is there really a difference in all these different products? Don’t they all basically just do the same thing? If all of our skin was exactly the same that would probably be the case. Unfortunately, the skin is a complex organ that has specific properties that are unique to each of us. Therefore one kind of moisturizer can definitely be more effective than another when it comes to treating our own special skin qualities. Knowing what goes in all these products is the key to choosing the type of moisturizer that best fits your skin type.
            Most moisturizers are a combination of oil and water soluble parts called an emulsion. More recent advances include vesicles, microscopic bubbles made of biological components. These components are useful in restoring the skin’s protective layer and also carry active ingredients inside the cells. The correct use of moisturizers is important for people with dermatologic disease. Improper application of a product could lead to a worsening of the condition.
            Moisturizers claim that they can restore and heal the skin but there is not a very clear definition of exactly what dry skin is. The symptoms include dry and uncomfortable sensations that include pain, itchiness, stinging, and tingling and a rough surface. Redness may also be apparent. More severe cases include dry, white patches on the skin that is flaky or cracked in appearance.
          </p>
        </div>
        <div className={CSS.section + " " + CSS.section1}>
          <h1>1.</h1>
          <p>
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and still hangs in their house today.
            In 1964 Beryl Cook and her husband returned to the UK settling first in Cornwall and then later in Plymouth where, during the summer months, Beryl ran a boarding house for holidaymakers on the seafront. Beryl had now been painting for a number of years, basing her pictures on her everyday observations of people around her. By 1975 she had amassed numerous paintings that covered the walls of their boarding house. A friend took away a dozen or so and, to Beryl’s surprise, managed to sell them all for around
          </p>
        </div>
        <div className={CSS.section + " " + CSS.section2}>

        </div>
        <div className={CSS.section + " " + CSS.section3}>

        </div>
      </div>
    )
  }
}

export default Fade