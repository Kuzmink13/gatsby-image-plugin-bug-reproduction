import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

const mainStyle = {
  width: 300
}

const roundedStyle = {
  borderRadius: "100%",
}

const IndexPage = () => {
  return (
    <main style={mainStyle}>
      <div>
        <p>
          Expected result: Image displayed <strong>without</strong> rounded corners
        </p>
        <StaticImage src="../images/test_image.jpg" alt="some alt text"/>
      </div>

      <div>
        <p>
        Expected result: Image displayed <strong>with</strong> rounded corners
        </p>
        <StaticImage src="../images/test_image.jpg" alt="" style={roundedStyle} />
      </div>
    </main>
  )
}

export default IndexPage
