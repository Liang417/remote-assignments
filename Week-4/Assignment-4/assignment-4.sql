-- Write an SQL statement to select all articles with their author’s email.
SELECT article.id as article_id,name as author_name,email as author_email,title,content 
FROM article
JOIN user ON article.author_id = user.id;

-- Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT *
FROM article
ORDER BY id
LIMIT 6 OFFSET 6;