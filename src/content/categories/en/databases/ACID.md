- **ACID-compliant :** Stands for "Atomicity, Consistency, Isolation, Durability." The ACID acronym defines four characteristics a database must have to ensure data integrity  
  </br>  
  1. **Atomicity :** Atomicity guarantees each transaction is an "all-or-nothing" event. In other words, it succeeds or fails completely. Atomic operations prevent data corruption by disallowing partial transactions. If an operation cannot be completed, it is "rolled back" to the previous state, as if it never happened.  
  </br>
  2. **Consistency :** Consistency means that you guarantee that your data will be consistent; none of the constraints you have on related data will ever be violated.  
  </br>
  3. **Isolation :** Isolation means that one transaction cannot read data from another transaction that is not yet completed. If two transactions are executing concurrently, each one will see the world as if they were executing sequentially, and if one needs to read data that is written by another, it will have to wait until the other is finished.  
  </br>
  4. **Durability :** means that once a transaction is complete, it is guaranteed that all of the changes have been recorded to a durable medium (such as a hard disk), and the fact that the transaction has been completed is likewise recorded.  
