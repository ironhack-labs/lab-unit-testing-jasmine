describe("Iteration 1 | Getting Started", () => {
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });

      it("should return undefined if any of the two numbers in not a number", () => {
        expect(add(1,"2")).toEqual(undefined)
        expect(add("2",1)).toEqual(undefined)
        expect(add("2","1")).toEqual(undefined)
        expect(add([],{})).toEqual(undefined)
      })

    });
  });
