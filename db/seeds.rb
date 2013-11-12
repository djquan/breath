dq = User.create(name: "Dan Quan", email: "djquan@gmail.com", password: "password123456")
js = User.create(name: "John Smith", email: "johnsmith@example.com", password: "123456")
jd = User.create(name: "Jane Doe", email: "janedoe@example.com", password: "123456")
bm = User.create(name: "Boss Man", email: "boss_man@example.com", password: "123456")
bw = User.create(name: "Boss Woman", email: "boss_woman@example.com", password: "123456")
wb = User.create(name: "WorkerB", email: "workerB@example.com", password: "123456")

ss = Team.create(name: "SpaceShuttle Marketing")
integration = ss.projects.create(name: 'Integration', owner_id: 5)
pss = ss.projects.create(name: 'Planning', owner_id: 4)
ss.users << [wb, jd, js, bm, bw]

hiring = Team.create(name: "NASA HR")
hiring.users << [wb, bm, bw]

sop = hiring.projects.create(name: 'Revise SOP', owner_id: 6)
ta = sop.tasks.create(name: 'Identify target areas', due: Date.today, creator_id: 5, completed: true, description: "include priorities")
ta.assigned_users << wb
sop.tasks.create(name: 'Submit proposed changes', creator_id: 6)

interviews = hiring.projects.create(name: 'Interviews', owner_id: 5)
interviews.tasks.create(name: "Interview George Clooney", due: Date.today + 7, creator_id: 5).assigned_users << wb
interviews.tasks.create(name: "Interview Sandra Bullock", due: Date.today + 4, creator_id: 5, completed: true).assigned_users << wb

pss.tasks.create(name: "Document the target audience", due: Date.today, creator_id: 6, completed: true)
pss.tasks.create(name: "Determine the appropriate media presence", due: Date.today + 1, creator_id: 6, description: "Twitter, facebook, instagram, newspaper?")
pss.tasks.create(name: "Get astronauts on Daily Show", due: Date.today + 30, creator_id: 6, description: "Maybe Colbert if Daily Show is unavailable.  Must reach young people!")

integration.tasks.create(name: "Run market strategy by legal department", due: Date.today + 5, completed: true, creator_id: 6)
integration.tasks.create(name: "Talk to training to get astronaut's schedules", due: Date.today + 6, creator_id: 6)
integration.tasks.create(name: "Talk with meteorology to check forecast for launch", due: Date.today + 12, creator_id: 6)

sts = pss.tasks.create(name: "Get Bosses on Sunday talk shows", due: Date.today + 7, creator_id: 6, description: "Meet the press, face the nation")
sts.assigned_users << [bm, bw]
sts.subtasks << Task.new(name: 'Call Face the Nation', creator_id: 6)
sts.subtasks << Task.new(name: 'Call Meet the Press', creator_id: 6)
media_drive = Tag.create(name: 'media-drive')
sts.tags << media_drive

facebook = pss.tasks.create(name: "Set up a facebook page for the mission", due: Date.today + 3, creator_id: 6, description: "Should be easy")
social_media = Tag.create(name: 'social-media')
facebook.tags << social_media

final = wb.projects.create(name: 'Final Project', owner_id: 6)

final.tasks.create(name: 'Buy domain', due: Date.today - 7, creator_id: 6, description: "Breath.io?", completed: true)
backend = final.tasks.create(name: 'Complete rails back-end', due: Date.today - 3, creator_id: 6, description: "Various models", completed: true)

backend.subtasks << Task.create(name: 'User and sessions', creator_id: 6, completed: true)
backend.subtasks << Task.create(name: 'Teams and projects', creator_id: 6, completed: true)
backend.subtasks << Task.create(name: 'Tasks', creator_id: 6, completed: true)

client = final.tasks.create(name: 'Complete backbone client-side', due: Date.today - 2, creator_id: 6, completed: true)
client.subtasks << Task.create(name: 'User and sessions', creator_id: 6, completed: true)
client.subtasks << Task.create(name: 'Teams and projects', creator_id: 6, completed: true)
client.subtasks << Task.create(name: 'Tasks', creator_id: 6, completed: true)



