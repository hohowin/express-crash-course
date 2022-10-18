# express-crash-course

---

## To Install

```bash
npm install
```
---

## To Start Server

```bash
# Dev Mode
npm run dev
# OR Prod Mode
npm start
```

---

## For Get, try:

- http://localhost:5000/api/members
- http://localhost:5000/api/members/1
- http://localhost:5000/api/members/2
- http://localhost:5000/api/members/3
- http://localhost:5000/api/members/6

---

## For Post:

### Postman
In header, `Content-Type` = `application/json`

In body, put:

```json
{
    "name": "Mike Tyson",
    "email": "mike@gmail.com"
}
```

then post to URL:

http://localhost:5000/api/members

---

## For Put:

### Postman
In header, `Content-Type` = `application/json`

In body, try:

```json
{
    "name": "Jane Doe",
}
```

```json
{
    "email": "jane@yahoo.com",
}
```

then put to URL:

http://localhost:5000/api/members/1

---

## For Delete:

