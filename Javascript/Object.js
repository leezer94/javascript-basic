{
  // Creating Object

  const object = {
    property: 'value',
    method: function () {},
  };

  function NewObject(name) {
    this.name = name;
  }

  const newObject = new NewObject('jang');

  const newObject2 = Object.create(Object.prototype, {
    name: {
      value: 'Lee',
      writable: false, // be able to overwrite
      enumerable: false, //  be able to enumerate
      configurable: true, // be able to config
    },
  });

  newObject2.name = 'kim';

  for (const key in newObject2) {
    // console.log(key);
  }
}
{
  // enumerate object

  const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: 'value4',
  };

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // console.log(key); // 상속되거나 확장되어서 사용된 객체를 가져오지 않기위해서 (방어문)
    }
  }

  {
    let val = 1; // 3
    {
      let val = 5; // 2
      {
        let val = 10; // 1
        {
          // console.log(val);
        }
      }
    }
  }
}

{
  // modify obejct

  const person = {
    firstName: 'Keonhee',
    location: 'korea',
  };

  // 추가
  person.lastName = 'Lee';
  // 수정
  person.lastName = 'Lee - ';

  // 삭제

  delete person.location;

  // console.log(person);
}
{
  // property (getter,setter)
  const person = {
    _firstName: 'Keonhee',
    lastName: 'Lee',

    get firstName() {
      return this._firstName.toUpperCase();
    },

    set firstName(newFirstName) {
      if (typeof newFirstName !== 'string') {
        this._firstName = 'undefined name';

        return;
      }

      this._firstName = newFirstName;
    },

    get fullName() {
      return this._firstName + ' ' + this.lastName;
    },
  };

  // console.log(person.fullName);
}
{
  // constructor

  function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function () {
      return `${this.name} 입니다.`;
    };
  }

  const me = new Person('keonhee', 23, 'Korea');
  const you = new Person('ronja', 23, 'Germany');

  // console.log(me.getName());
}
{
  const data = {
    squadName: 'Super hero squad',
    homeTown: 'Metro City',
    formed: 2016,
    secretBase: 'Super tower',
    active: true,
    members: [
      {
        name: 'Molecule Man',
        age: 29,
        secretIdentity: 'Dan Jukes',
        powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast'],
      },
      {
        name: 'Madame Uppercut',
        age: 39,
        secretIdentity: 'Jane Wilson',
        powers: [
          'Million tonne punch',
          'Damage resistance',
          'Superhuman reflexes',
        ],
      },
      {
        name: 'Eternal Flame',
        age: 1000000,
        secretIdentity: 'Unknown',
        powers: [
          'Immortality',
          'Heat Immunity',
          'Inferno',
          'Teleportation',
          'Interdimensional travel',
        ],
      },
    ],
  };

  const keys = Object.keys(data);
  const values = Object.values(data.members);
  const entries = Object.entries(data.members);

  // console.log(entries);
}
{
  // splice()
  // 원본 배열을 훼손

  const arr = ['one', 'two', 'three'];

  arr.splice(1, 1, 'four');

  // console.log(arr);
}
