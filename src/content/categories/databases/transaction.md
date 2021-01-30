**Transaction :** A transaction is a mechanism that allows you to mark a group of operations ***(sql queries)*** and execute them in such a way that either they all execute (commit), or the system state will be as if they have not started to execute at all (rollback).
  e.g:
  ```sql
  -- BEGIN TRANSACTION
  -- transfer $100 for example from one account to another
    UPDATE users SET balance = balance + 100 WHERE user_id = 5;
    UPDATE users SET balance = balance - 100 WHERE user_id = 2;
    -- SELECT * FROM users WHERE user_id = 2;
    -- ...
  -- END TRANSACTION
  ```
