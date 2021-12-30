# DOCUMENTATION REST API REGISTRATION

### API ENDPOINT
```ruby
https://register.ulin-app.xyz/
```

| Action           | Url           | Parameter        | Method | return   | Example   |
| ---------------- | ------------- | ---------------- | -----  | -------- | -------- |
| Find Participant By Id  | /v1/participant/:id_participant | Id Participant | `GET` | Detail Participant | https://register.ulin-app.xyz/v1/participant/{id_participant} |
| Save Participant register | /v1/register  | -- | `POST` | message succeffully saved | https://register.ulin-app.xyz/v1/register |
| Update / Checkin Participant | /v1/check/:id_participant | Id participant | `PATCH` | message update / check-im successfully | https://register.ulin-app.xyz/v1/check/:id_participant |
