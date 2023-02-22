import pynecone as pc

config = pc.Config(
    app_name="zwerver_com",
    db_url="sqlite:///pynecone.db",
    env=pc.Env.DEV,
)
