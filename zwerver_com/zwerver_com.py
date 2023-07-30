
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
        pc.hstack(
            pc.heading("Arthur_", font_size="2em", color="black", width="90%"),
            pc.box(
        pc.heading("About"),
                pc.text(
                    """
-Hello, I'm Arthur.
                    """
                ),
                pc.text(" -My birthday is the 10th January."),
                pc.hstack(
                    pc.text("- It's: "),
                    pc.html("""
<iframe src="https://free.timeanddate.com/clock/i8yjdned/n48/tlbe/tct/pct/ftb/bo2/tt0/tw1/tm1/tb4" frameborder="0" width="123" height="39" allowtransparency="true"></iframe>
                        """),
                ),
                pc.text("- I speak Dutch, English and German."),
                padding="2%",
                border_radius=10,
                width="140%",
                box_shadow="-2px 2px 10px 0px rgba(0, 0, 0, 0.1)",
                border="2px solid rgba(200, 200, 200)",
                background_color="rgb(240, 240, 240)"
            ),
            pc.box(
                pc.heading("Projects"),
                pc.text("- Tess (Discord bot)"),
                padding="2%",
                border_radius=10,
                width="140%",
                box_shadow="-2px 2px 10px 0px rgba(0, 0, 0, 0.1)",
                border="2px solid rgba(200, 200, 200)",
                background_color="rgb(240, 240, 240)"
            ),
            spacing="1.5em",
            font_size="2em",
        ),
        padding_top="10%",
        background_color= "rgb(128,128,128)", height="100vh"
    )


# Add state and page to the app.
app = pc.App(state=State,style=styles)
app.add_page(index, title="home-arthur_", description="The website that's tell you a little more about arthur_")
app.compile()
