
      const numbers = [5, 12, 8, 20, 3];

      const result = numbers.map((num) => num * 10);

      const result1 = numbers.filter((num) => num < 10);

      console.log(result); // Output: [12, 20]
      console.warn(result1);

      console.error(result);
      console.info("Info  : ", result1);
      console.table("Table : ",numbers)
    