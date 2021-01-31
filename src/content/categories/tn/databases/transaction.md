<!-- **Transaction :** A transaction is a mechanism that allows you to mark a group of operations ***(sql queries)*** and execute them in such a way that either they all execute (commit), or the system state will be as if they have not started to execute at all (rollback).
  e.g:
  ```sql
  -- BEGIN TRANSACTION
  -- transfer $100 for example from one account to another
    UPDATE users SET balance = balance + 100 WHERE user_id = 5;
    UPDATE users SET balance = balance - 100 WHERE user_id = 2;
    -- SELECT * FROM users WHERE user_id = 2;
    -- ...
  -- END TRANSACTION
  ``` -->

**Transaction** hia group ta3 sql queries ye5dmou m3a b3athhom fard wa9t. bch ya3mlou hkaya. haw example:  
</br>

```sql
-- BEGIN TRANSACTION
-- example, transfer 100TND men account A lel account B
  UPDATE users SET balance = balance + 100 WHERE user_id = 5;
  UPDATE users SET balance = balance - 100 WHERE user_id = 2;
  -- SELECT * FROM users WHERE user_id = 2;
  -- ...
-- END TRANSACTION
```

**tsawer te5dem el update eloula w thaniya n9olou saret hkaya lel system tcrasha oooo, a9ra el "ACID" bch tefhem kifeh tetjaneb 7keya kif heka...**
