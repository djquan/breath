dq = User.create(name: "Dan Quan", email: "djquan@gmail.com", password: "123456")
js = User.create(name: "John Smith", email: "johnsmith@example.com", password: "123456")
jd = User.create(name: "Jane Doe", email: "janedoe@example.com", password: "123456")
bm = User.create(name: "Boss Man", email: "boss_man@example.com", password: "123456")
bw = User.create(name: "Boss Woman", email: "boss_woman@example.com", password: "123456")
wb = User.create(name: "WorkerB", email: "workerB@example.com", password: "123456")

aa = Team.create(name: "Marketing")
aa.users << [dq, js, jd, wb]

mcr = aa.projects.create(name: "Marketing Content Roadmap", owner_id: 1)
qab = mcr.tasks.create(name: "Q+A Video, Blog Post", creator_id: 1)


