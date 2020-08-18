import { String, Record, ExactRecord, Array } from '..';

const AnimalRecord = Record({
  cat: String,
  dog: String,
}).exact();

const AnimalNestedRecord = Record({
  cat: String,
  dog: String,
  zoo: ExactRecord({
    lion: String,
    penguin: String,
  }),
}).exact();

const AnimalsRecord = Array(AnimalRecord);

const CrewMember = Record({
  name: String,
  rank: String,
  home: String,
});

describe('record', () => {
  describe('pick', () => {
    const PetMember = CrewMember.pick(['name', 'home']);

    it('keeps only selected fields', () => {
      expect(Object.keys(PetMember.fields)).toEqual(['name', 'home']);
    });
  });

  describe('omit', () => {
    const PetMember = CrewMember.omit(['name', 'home']);

    it('drop selected fields', () => {
      expect(Object.keys(PetMember.fields)).toEqual(['rank']);
    });
  });

  describe('exact', () => {
    it('works with same object', () => {
      AnimalRecord.check({
        dog: 'Bob2',
        cat: 'Tiger',
      });
    });

    it('throws if additional fields in exact mode', () => {
      const result = AnimalRecord.validate({
        dog: 'Bob2',
        cat: 'Tiger',
        cow: 'Billy',
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.message).toBe('Additional field cow');
      }
    });

    it('works with same object nested', () => {
      AnimalNestedRecord.check({
        dog: 'Bob',
        cat: 'Tiger',
        zoo: {
          lion: 'a',
          penguin: 'b',
        },
      });
    });

    it('throws if additional fields in exact mode nested', () => {
      const result = AnimalNestedRecord.validate({
        dog: 'Bob',
        cat: 'Tiger',
        zoo: {
          lion: 'a',
          penguin: 'b',
          monkey: 'c',
        },
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.message).toBe('Additional field monkey');
      }
    });

    it('throws if additional fields in exact mode array', () => {
      const result = AnimalsRecord.validate([
        {
          dog: 'Bob',
          cat: 'Tiger',
          cow: 'Brown',
        },
      ]);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.message).toBe('Additional field cow');
      }
    });
  });
});
