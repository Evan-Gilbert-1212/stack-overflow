-----------Users-----------
ID - PK
UserName - TEXT
Password - TEXT
PicturePath - TEXT
---------Questions---------
ID - PK
QuestionTitle - TEXT
Question - TEXT
Score - INT
QuestionPostedOn - DateTime
Tags - TEXT
----------Answers----------
ID - PK
QuestionID - FK
Answer - TEXT
Score - INT
AnswerPostedOn - DateTime
