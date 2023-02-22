
"""Welcome to Pynecone! This file outlines the steps to create a basic app."""
from pcconfig import config

import pynecone as pc

docs_url = "https://pynecone.io/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"
styles ={
    

}


class State(pc.State):
    """The app state."""

    pass


def index() -> pc.Component:
    return pc.center(
        pc.vstack(
            pc.heading("hello world!", font_size="2em", color="white"),
                    

            spacing="1.5em",
            font_size="2em",
        ),
        padding_top="10%",
        background_image= "linear-gradient(0deg, rgb(0,0,0), rgb(0,0,100))", height="100vh"
    )


# Add state and page to the app.
app = pc.App(state=State,style=styles)
app.add_page(index)
app.compile()
