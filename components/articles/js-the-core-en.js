import { Box, Text, Code, Link, Divider } from '@chakra-ui/react'
import {
  SectionHeading,
  Definition,
  ArticleNote,
  CodeBlock,
  ArticleImage
} from '../article'

import imgJsObject from '../../public/images/articles/js-the-core/js-object.webp'
import imgPrototypeChain from '../../public/images/articles/js-the-core/prototype-chain.webp'
import imgSharedPrototype from '../../public/images/articles/js-the-core/shared-prototype.webp'
import imgJsConstructor from '../../public/images/articles/js-the-core/js-constructor.webp'
import imgExecutionStack from '../../public/images/articles/js-the-core/execution-stack.webp'
import imgEnvironmentChain from '../../public/images/articles/js-the-core/environment-chain.webp'
import imgEnvBindingObject from '../../public/images/articles/js-the-core/env-binding-object.webp'
import imgClosure from '../../public/images/articles/js-the-core/closure.webp'
import imgSharedEnvironment from '../../public/images/articles/js-the-core/shared-environment.webp'
import imgContextRealm from '../../public/images/articles/js-the-core/context-realm.webp'
import imgAgents1 from '../../public/images/articles/js-the-core/agents-1.webp'

const ContentEN = () => (
  <Box>
    <Text mb={4}>
      This article is a <em>concise summary</em> of Dmitry Soshnikov’s lecture{' '}
      <em>
        <b>“JavaScript. The Core”</b>
      </em>
      , which explores the ECMAScript programming language and the key
      components of its runtime system.
    </Text>
    <Text mb={4}>
      <strong>Audience:</strong> advanced engineers, experts.
    </Text>
    <Text mb={4}>
      The first edition of the article covers generic aspects of JS language,
      using abstractions mostly from the legacy ES3 spec, with some references
      to the appropriate changes in ES5 and ES6 (aka ES2015).
    </Text>
    <Text mb={4}>
      Starting since ES2015, the specification changed descriptions and
      structures of some core components, introduced new models, etc. And in
      this edition we focus on the newer abstractions, updated terminology, but
      still maintaining the very basic JS structures which stay consistent
      throughout the spec versions.
    </Text>
    <Text mb={4}>This article covers ES2017+ runtime system.</Text>
    <ArticleNote>
      <strong>Note:</strong> the latest version of the{' '}
      <Link href="https://tc39.github.io/ecma262/" isExternal>
        ECMAScript specification
      </Link>{' '}
      can be found on the TC-39 website.
    </ArticleNote>
    <Text mb={6}>
      We start our discussion with the concept of an <em>object</em>, which is
      fundamental to ECMAScript.
    </Text>

    {/* ── 1. Object ── */}
    <SectionHeading id="object">Object</SectionHeading>
    <Text mb={4}>
      ECMAScript is an <em>object-oriented</em> programming language with the{' '}
      <em>prototype-based</em> organization, having the concept of an{' '}
      <em>object</em> as its core abstraction.
    </Text>
    <Definition>
      <strong>Def. 1: Object:</strong> An <em>object</em> is a{' '}
      <em>collection of properties</em>, and has a{' '}
      <em>single prototype object</em>. The prototype may be either an object or
      the <Code>null</Code> value.
    </Definition>
    <Text mb={4}>
      Let&apos;s take a basic example of an object. A prototype of an object is
      referenced by the internal <Code>{'[[Prototype]]'}</Code> property, which
      to user-level code is exposed via the <Code>__proto__</Code> property.
    </Text>
    <Text mb={2}>For the code:</Text>
    <CodeBlock>{`let point = {
  x: 10,
  y: 20,
};`}</CodeBlock>
    <Text mb={4}>
      we have the structure with two <em>explicit own properties</em> and one{' '}
      <em>implicit</em> <Code>__proto__</Code> property, which is the reference
      to the prototype of <Code>point</Code>:
    </Text>
    <ArticleImage
      src={imgJsObject}
      alt="Figure 1. A basic object with a prototype."
      caption="Figure 1. A basic object with a prototype."
      maxW="500px"
    />
    <ArticleNote>
      <strong>Note:</strong> objects may store also <em>symbols</em>. You can
      get more info on symbols in{' '}
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"
        isExternal
      >
        this documentation
      </Link>
      .
    </ArticleNote>
    <Text mb={4}>
      The prototype objects are used to implement <em>inheritance</em> with the
      mechanism of <em>dynamic dispatch</em>. Let&apos;s consider the{' '}
      <em>prototype chain</em> concept to see this mechanism in detail.
    </Text>

    {/* ── 2. Prototype ── */}
    <SectionHeading id="prototype">Prototype</SectionHeading>
    <Text mb={4}>
      Every object, when is created, receives its <em>prototype</em>. If the
      prototype is not set <em>explicitly</em>, objects receive{' '}
      <em>default prototype</em> as their <em>inheritance object</em>.
    </Text>
    <Definition>
      <strong>Def. 2: Prototype:</strong> A <em>prototype</em> is a delegation
      object used to implement <em>prototype-based inheritance</em>.
    </Definition>
    <Text mb={2}>
      The prototype can be set <em>explicitly</em> via either the{' '}
      <Code>__proto__</Code> property, or <Code>Object.create</Code> method:
    </Text>
    <CodeBlock>{`// Base object.
let point = {
  x: 10,
  y: 20,
};

// Inherit from \`point\` object.
let point3D = {
  z: 30,
  __proto__: point,
};

console.log(
  point3D.x, // 10, inherited
  point3D.y, // 20, inherited
  point3D.z  // 30, own
);`}</CodeBlock>
    <ArticleNote>
      <strong>Note:</strong> by default objects receive{' '}
      <Code>Object.prototype</Code> as their inheritance object.
    </ArticleNote>
    <Text mb={4}>
      Any object can be used as a prototype of another object, and the prototype
      itself can have its own prototype. If a prototype has a non-null reference
      to its prototype, and so on, it is called the <em>prototype chain</em>.
    </Text>
    <Definition>
      <strong>Def. 3: Prototype chain:</strong> A <em>prototype chain</em> is a{' '}
      <em>finite</em> chain of objects used to implement <em>inheritance</em>{' '}
      and <em>shared properties</em>.
    </Definition>
    <ArticleImage
      src={imgPrototypeChain}
      alt="Figure 2. A prototype chain."
      caption="Figure 2. A prototype chain."
      maxW="600px"
    />
    <Text mb={4}>
      The rule is very simple: if a property is not found in the object itself,
      there is an attempt to <em>resolve</em> it in the prototype; in the
      prototype of the prototype, etc. — until the whole prototype chain is
      considered.
    </Text>
    <Text mb={4}>
      Technically this mechanism is known as <em>dynamic dispatch</em> or{' '}
      <em>delegation</em>.
    </Text>
    <Definition>
      <strong>Def. 4: Delegation:</strong> a mechanism used to resolve a
      property in the inheritance chain. The process happens at runtime, hence
      is also called{' '}
      <strong>
        <em>dynamic dispatch</em>
      </strong>
      .
    </Definition>
    <ArticleNote>
      <strong>Note:</strong> in contrast with <em>static dispatch</em> when
      references are resolved at <em>compile time</em>,{' '}
      <em>dynamic dispatch</em> resolves the references at <em>runtime</em>.
    </ArticleNote>
    <Text mb={2}>
      And if a property eventually is not found in the prototype chain, the{' '}
      <Code>undefined</Code> value is returned:
    </Text>
    <CodeBlock>{`// An "empty" object.
let empty = {};

console.log(

  // function, from default prototype
  empty.toString,

  // undefined
  empty.x,

);`}</CodeBlock>
    <Text mb={4}>
      As we can see, a default object is actually <em>never empty</em> — it
      always inherits <em>something</em> from the <Code>Object.prototype</Code>.
      To create a <em>prototype-less dictionary</em>, we have to explicitly set
      its prototype to <Code>null</Code>:
    </Text>
    <CodeBlock>{`// Doesn't inherit from anything.
let dict = Object.create(null);

console.log(dict.toString); // undefined`}</CodeBlock>
    <Text mb={4}>
      The <em>dynamic dispatch</em> mechanism allows <em>full mutability</em> of
      the inheritance chain, providing an ability to change the delegation
      object:
    </Text>
    <CodeBlock>{`let protoA = {x: 10};
let protoB = {x: 20};

// Same as \`let objectC = {__proto__: protoA};\`:
let objectC = Object.create(protoA);
console.log(objectC.x); // 10

// Change the delegate:
Object.setPrototypeOf(objectC, protoB);
console.log(objectC.x); // 20`}</CodeBlock>
    <ArticleNote>
      <strong>Note:</strong> even though the <Code>__proto__</Code> property is
      standardized today, and is easier to use for explanations, on practice
      prefer using API methods for prototype manipulations, such as{' '}
      <Code>Object.create</Code>, <Code>Object.getPrototypeOf</Code>,{' '}
      <Code>Object.setPrototypeOf</Code>, and similar on the{' '}
      <Code>Reflect</Code> module.
    </ArticleNote>
    <Text mb={4}>
      On the example of <Code>Object.prototype</Code>, we see that the{' '}
      <em>same prototype</em> can be shared across <em>multiple objects</em>. On
      this principle the <em>class-based inheritance</em> is implemented in
      ECMAScript. Let&apos;s see the example, and look under the hood of the
      &ldquo;class&rdquo; abstraction in JS.
    </Text>

    {/* ── 3. Class ── */}
    <SectionHeading id="class">Class</SectionHeading>
    <Text mb={4}>
      When several objects share the same initial state and behavior, they form
      a <em>classification</em>.
    </Text>
    <Definition>
      <strong>Def. 5: Class:</strong> A <em>class</em> is a formal abstract set
      which specifies initial state and behavior of its objects.
    </Definition>
    <Text mb={4}>
      In case we need to have <em>multiple objects</em> inheriting from the same
      prototype, we could of course create this one prototype, and explicitly
      inherit it from the newly created objects:
    </Text>
    <CodeBlock>{`// Generic prototype for all letters.
let letter = {
  getNumber() {
    return this.number;
  }
};

let a = {number: 1, __proto__: letter};
let b = {number: 2, __proto__: letter};
// ...
let z = {number: 26, __proto__: letter};

console.log(
  a.getNumber(), // 1
  b.getNumber(), // 2
  z.getNumber(), // 26
);`}</CodeBlock>
    <Text mb={4}>We can see these relationships on the following figure:</Text>
    <ArticleImage
      src={imgSharedPrototype}
      alt="Figure 3. A shared prototype."
      caption="Figure 3. A shared prototype."
      maxW="500px"
    />
    <Text mb={4}>
      However, this is obviously <em>cumbersome</em>. And the class abstraction
      serves exactly this purpose — being a <em>syntactic sugar</em> (i.e. a
      construct which <em>semantically does the same</em>, but in a much{' '}
      <em>nicer syntactic form</em>), it allows creating such multiple objects
      with the convenient pattern:
    </Text>
    <CodeBlock>{`class Letter {
  constructor(number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }
}

let a = new Letter(1);
let b = new Letter(2);
// ...
let z = new Letter(26);

console.log(
  a.getNumber(), // 1
  b.getNumber(), // 2
  z.getNumber(), // 26
);`}</CodeBlock>
    <ArticleNote>
      <strong>Note:</strong> <em>class-based inheritance</em> in ECMAScript is
      implemented on top of the <em>prototype-based delegation</em>.
    </ArticleNote>
    <ArticleNote>
      <strong>Note:</strong> a <em>&ldquo;class&rdquo;</em> is just a{' '}
      <em>theoretical abstraction</em>. Technically it can be implemented with
      the <em>static dispatch</em> as in Java or C++, or{' '}
      <em>dynamic dispatch (delegation)</em> as in JavaScript, Python, Ruby,
      etc.
    </ArticleNote>
    <Text mb={4}>
      Technically a &ldquo;class&rdquo; is represented as a{' '}
      <em>&ldquo;constructor function + prototype&rdquo;</em> pair. Thus, a
      constructor function <em>creates objects</em>, and also{' '}
      <em>automatically</em> sets the <em>prototype</em> for its newly created
      instances. This prototype is stored in the{' '}
      <Code>{'<ConstructorFunction>.prototype'}</Code> property.
    </Text>
    <Definition>
      <strong>Def. 6: Constructor:</strong> A <em>constructor</em> is a function
      which is used to create instances, and automatically set their prototype.
    </Definition>
    <Text mb={4}>
      It is possible to use a constructor function explicitly. Moreover, before
      the class abstraction was introduced, JS developers used to do so not
      having a better alternative (we can still find a lot of such legacy code
      allover the internets):
    </Text>
    <CodeBlock>{`function Letter(number) {
  this.number = number;
}

Letter.prototype.getNumber = function() {
  return this.number;
};

let a = new Letter(1);
let b = new Letter(2);
// ...
let z = new Letter(26);

console.log(
  a.getNumber(), // 1
  b.getNumber(), // 2
  z.getNumber(), // 26
);`}</CodeBlock>
    <Text mb={4}>
      And while creating a single-level constructor was pretty easy, the
      inheritance pattern from parent classes required much more boilerplate.
      Currently this boilerplate is hidden as an <em>implementation detail</em>,
      and that exactly what happens under the hood when we create a class in
      JavaScript.
    </Text>
    <ArticleNote>
      <strong>Note:</strong> <em>constructor functions</em> are just{' '}
      <em>implementation details</em> of the class-based inheritance.
    </ArticleNote>
    <Text mb={4}>
      Let&apos;s see the relationships of the objects and their class:
    </Text>
    <ArticleImage
      src={imgJsConstructor}
      alt="Figure 4. A constructor and objects relationship."
      caption="Figure 4. A constructor and objects relationship."
    />
    <Text mb={4}>
      The figure above shows that <em>every object</em> has an associated
      prototype. Even the constructor function (class) <Code>Letter</Code> has
      its own prototype, which is <Code>Function.prototype</Code>. Notice, that{' '}
      <Code>Letter.prototype</Code> is the prototype of the Letter{' '}
      <em>instances</em>, that is <Code>a</Code>, <Code>b</Code>, and{' '}
      <Code>z</Code>.
    </Text>
    <ArticleNote>
      <strong>Note:</strong> the <em>actual</em> prototype of <em>any</em>{' '}
      object is <em>always</em> the <Code>__proto__</Code> reference. And the
      explicit <Code>prototype</Code> property on the constructor function is
      just a reference to the prototype of its <em>instances</em>; from
      instances it&apos;s still referred by the <Code>__proto__</Code>.
    </ArticleNote>
    <Text mb={4}>
      Now when we understand the basic relationships between ECMAScript objects,
      let&apos;s take a deeper look at JS <em>runtime system</em>. As we will
      see, almost everything there can also be presented as an object.
    </Text>

    {/* ── 4. Execution context ── */}
    <SectionHeading id="execution-context">Execution context</SectionHeading>
    <Text mb={4}>
      To execute JS code and track its runtime evaluation, ECMAScript spec
      defines the concept of an <em>execution context</em>. Logically execution
      contexts are maintained using a <em>stack</em> (the{' '}
      <em>execution context stack</em> as we will see shortly), which
      corresponds to the generic concept of a <em>call-stack</em>.
    </Text>
    <Definition>
      <strong>Def. 7: Execution context:</strong> An <em>execution context</em>{' '}
      is a specification device that is used to track the runtime evaluation of
      the code.
    </Definition>
    <Text mb={4}>
      There are several types of ECMAScript code: the <em>global code</em>,{' '}
      <em>function code</em>,{' '}
      <em>
        <Code>eval</Code> code
      </em>
      , and <em>module code</em>; each code is evaluated in its execution
      context. Different code types, and their appropriate objects may affect
      the structure of an execution context: for example,{' '}
      <em>generator functions</em> save their <em>generator object</em> on the
      context.
    </Text>
    <Text mb={2}>Let&apos;s consider a recursive function call:</Text>
    <CodeBlock>{`function recursive(flag) {

  // Exit condition.
  if (flag === 2) {
    return;
  }

  // Call recursively.
  recursive(++flag);
}

// Go.
recursive(0);`}</CodeBlock>
    <Text mb={4}>
      When a function is called, a <em>new execution context</em> is created,
      and <em>pushed</em> onto the stack — at this point it becomes an{' '}
      <em>active execution context</em>. When a function returns, its context is{' '}
      <em>popped</em> from the stack.
    </Text>
    <Text mb={4}>
      A context which calls another context is called a <em>caller</em>. And a
      context which is being called, accordingly, is a <em>callee</em>. In our
      example the <Code>recursive</Code> function plays both roles: of a callee
      and a caller — when calls itself recursively.
    </Text>
    <Definition>
      <strong>Def. 8: Execution context stack:</strong> An{' '}
      <em>execution context stack</em> is a LIFO structure used to maintain
      control flow and order of execution.
    </Definition>
    <Text mb={4}>
      For our example from above we have the following stack
      &ldquo;push-pop&rdquo; modifications:
    </Text>
    <ArticleImage
      src={imgExecutionStack}
      alt="Figure 5. An execution context stack."
      caption="Figure 5. An execution context stack."
    />
    <Text mb={4}>
      As we can also see, the <em>global context</em> is always at the bottom of
      the stack, it is created prior execution of any other context.
    </Text>
    <Text mb={4}>
      In general, the code of a context <em>runs to completion</em>, however as
      we mentioned above, some objects — such as <em>generators</em>, may
      violate LIFO order of the stack. A generator function may suspend its
      running context, and <em>remove</em> it from the stack{' '}
      <em>before completion</em>. Once a generator is activated again, its
      context is <em>resumed</em> and again is <em>pushed</em> onto the stack:
    </Text>
    <CodeBlock>{`function *gen() {
  yield 1;
  return 2;
}

let g = gen();

console.log(
  g.next().value, // 1
  g.next().value, // 2
);`}</CodeBlock>
    <Text mb={4}>
      The <Code>yield</Code> statement here returns the value to the caller, and
      pops the context. On the second <Code>next</Code> call, the{' '}
      <em>same context</em> is pushed again onto the stack, and is{' '}
      <em>resumed</em>. Such context may <em>outlive</em> the caller which
      creates it, hence the violation of the LIFO structure.
    </Text>
    <ArticleNote>
      <strong>Note:</strong> you can read more about generators and iterators in{' '}
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators"
        isExternal
      >
        this documentation
      </Link>
      .
    </ArticleNote>
    <Text mb={4}>
      We shall now discuss the important components of an execution context; in
      particular we should see how ECMAScript runtime manages{' '}
      <em>variables storage</em>, and <em>scopes</em> created by nested blocks
      of a code. This is the generic concept of <em>lexical environments</em>,
      which is used in JS to store data, and solve the &ldquo;Funarg
      problem&rdquo; — with the mechanism of <em>closures</em>.
    </Text>

    {/* ── 5. Environment ── */}
    <SectionHeading id="environment">Environment</SectionHeading>
    <Text mb={4}>
      Every execution context has an associated <em>lexical environment</em>.
    </Text>
    <Definition>
      <strong>Def. 9: Lexical environment:</strong> A{' '}
      <em>lexical environment</em> is a structure used to define association
      between <em>identifiers</em> appearing in the context with their values.
      Each environment can have a reference to an{' '}
      <em>optional parent environment</em>.
    </Definition>
    <Text mb={4}>
      So an environment is a <em>storage</em> of variables, functions, and
      classes defined in a scope.
    </Text>
    <Text mb={4}>
      Technically, an environment is a <em>pair</em>, consisting of an{' '}
      <em>environment record</em> (an actual storage table which maps
      identifiers to values), and a reference to the parent (which can be{' '}
      <Code>null</Code>).
    </Text>
    <Text mb={2}>For the code:</Text>
    <CodeBlock>{`let x = 10;
let y = 20;

function foo(z) {
  let x = 100;
  return x + y + z;
}

foo(30); // 150`}</CodeBlock>
    <Text mb={4}>
      The environment structures of the <em>global context</em>, and a context
      of the <Code>foo</Code> function would look as follows:
    </Text>
    <ArticleImage
      src={imgEnvironmentChain}
      alt="Figure 6. An environment chain."
      caption="Figure 6. An environment chain."
      maxW="400px"
    />
    <Text mb={4}>
      Logically this reminds us of the <em>prototype chain</em> which we&apos;ve
      discussed above. And the rule for <em>identifiers resolution</em> is very
      similar: if a variable is <em>not found</em> in the <em>own</em>{' '}
      environment, there is an attempt to lookup it in the{' '}
      <em>parent environment</em>, in the parent of the parent, and so on —
      until the whole <em>environment chain</em> is considered.
    </Text>
    <Definition>
      <strong>Def. 10: Identifier resolution:</strong> the process of resolving
      a variable <em>(binding)</em> in an environment chain. An unresolved
      binding results to <Code>ReferenceError</Code>.
    </Definition>
    <Text mb={4}>
      This explains why variable <Code>x</Code> is resolved to <Code>100</Code>,
      but not to <Code>10</Code> — it is found directly in the <em>own</em>{' '}
      environment of <Code>foo</Code>; why we can access parameter{' '}
      <Code>z</Code> — it&apos;s also just stored on the{' '}
      <em>activation environment</em>; and also why we can access the variable{' '}
      <Code>y</Code> — it is found in the parent environment.
    </Text>
    <Text mb={4}>
      Similarly to prototypes, the same parent environment can be shared by
      several child environments: for example, two global functions share the
      same global environment.
    </Text>
    <Text mb={4}>
      Environment records differ by <em>type</em>. There are{' '}
      <strong>
        <em>object</em>
      </strong>{' '}
      environment records and{' '}
      <strong>
        <em>declarative</em>
      </strong>{' '}
      environment records. On top of the declarative record there are also{' '}
      <strong>
        <em>function</em>
      </strong>{' '}
      environment records, and{' '}
      <strong>
        <em>module</em>
      </strong>{' '}
      environment records. Each type of the record has specific only to it
      properties. However, the generic mechanism of the identifier resolution is
      common across all the environments, and doesn&apos;t depend on the type of
      a record.
    </Text>
    <Text mb={4}>
      An example of an <em>object environment record</em> can be the record of
      the <em>global environment</em>. Such record has also associated{' '}
      <em>binding object</em>, which may store some properties from the record,
      but not the others, and vice-versa. The binding object can also be
      provided as <Code>this</Code> value.
    </Text>
    <CodeBlock>{`// Legacy variables using \`var\`.
var x = 10;

// Modern variables using \`let\`.
let y = 20;

// Both are added to the environment record:
console.log(
  x, // 10
  y, // 20
);

// But only \`x\` is added to the "binding object".
// The binding object of the global environment
// is the global object, and equals to \`this\`:

console.log(
  this.x, // 10
  this.y, // undefined!
);

// Binding object can store a name which is not
// added to the environment record, since it's
// not a valid identifier:

this['not valid ID'] = 30;

console.log(
  this['not valid ID'], // 30
);`}</CodeBlock>
    <Text mb={4}>This is depicted on the following figure:</Text>
    <ArticleImage
      src={imgEnvBindingObject}
      alt="Figure 7. A binding object."
      caption="Figure 7. A binding object."
      maxW="500px"
    />
    <Text mb={4}>
      Notice, the binding object exists to cover <em>legacy constructs</em> such
      as <Code>var</Code>-declarations, and <Code>with</Code>-statements, which
      also provide their object as a binding object. These are historical
      reasons when environments were represented as simple objects. Currently
      the environments model is much more optimized, however as a result we
      can&apos;t access binding as properties anymore.
    </Text>
    <Text mb={4}>
      We have already seen how environments are related via the parent link. Now
      we shall see how an environment can <em>outlive</em> the context which
      creates it. This is the basis for the mechanism of <em>closures</em> which
      we&apos;re about to discuss.
    </Text>

    {/* ── 6. Closure ── */}
    <SectionHeading id="closure">Closure</SectionHeading>
    <Text mb={4}>
      Functions in ECMAScript are <em>first-class</em>. This concept is
      fundamental to <em>functional programming</em>, which aspects are
      supported in JavaScript.
    </Text>
    <Definition>
      <strong>Def. 11: First-class function:</strong> a function which can
      participate as a normal data: be stored in a variable, passed as an
      argument, or returned as a value from another function.
    </Definition>
    <Text mb={4}>
      With the concept of first-class functions so called{' '}
      <strong>Funarg problem</strong> is related (or{' '}
      <em>&ldquo;A problem of a functional argument&rdquo;</em>). The problem
      arises when a function has to deal with <em>free variables</em>.
    </Text>
    <Definition>
      <strong>Def. 12: Free variable:</strong> a variable which is{' '}
      <em>neither a parameter</em>, <em>nor a local variable</em> of this
      function.
    </Definition>
    <Text mb={2}>
      Let&apos;s take a look at the Funarg problem, and see how it&apos;s solved
      in ECMAScript. Consider the following code snippet:
    </Text>
    <CodeBlock>{`let x = 10;

function foo() {
  console.log(x);
}

function bar(funArg) {
  let x = 20;
  funArg(); // 10, not 20!
}

// Pass \`foo\` as an argument to \`bar\`.
bar(foo);`}</CodeBlock>
    <Text mb={4}>
      For the function <Code>foo</Code> the variable <Code>x</Code> is free.
      When the <Code>foo</Code> function is activated (via the{' '}
      <Code>funArg</Code> parameter) — where should it resolve the{' '}
      <Code>x</Code> binding? From the <em>outer scope</em> where the function
      was <em>created</em>, or from the <em>caller scope</em>, from where the
      function is <em>called</em>? As we see, the caller, that is the{' '}
      <Code>bar</Code> function, also provides the binding for <Code>x</Code> —
      with the value <Code>20</Code>.
    </Text>
    <Text mb={4}>
      The use-case described above is known as the{' '}
      <strong>
        <em>downwards funarg problem</em>
      </strong>
      , i.e. an <em>ambiguity</em> at determining a <em>correct environment</em>{' '}
      of a binding: should it be an environment of the <em>creation time</em>,
      or environment of the <em>call time</em>?
    </Text>
    <Text mb={4}>
      This is solved by an agreement of using <em>static scope</em>, that is the
      scope of the <em>creation time</em>.
    </Text>
    <Definition>
      <strong>Def. 13: Static scope:</strong> a language implements{' '}
      <em>static scope</em>, if only by looking at the source code one can
      determine in which environment a binding is resolved.
    </Definition>
    <Text mb={4}>
      The static scope sometimes is also called <em>lexical scope</em>, hence
      the <em>lexical environments</em> naming.
    </Text>
    <Text mb={4}>
      Technically the static scope is implemented by{' '}
      <em>capturing the environment</em> where a function is <em>created</em>.
    </Text>
    <ArticleNote>
      <strong>Note:</strong> you can read about <em>static</em> and{' '}
      <em>dynamic</em> scopes in{' '}
      <Link
        href="https://codeburst.io/js-scope-static-dynamic-and-runtime-augmented-5abfee6223fe"
        isExternal
      >
        this article
      </Link>
      .
    </ArticleNote>
    <Text mb={4}>
      In our example, the environment captured by the <Code>foo</Code> function,
      is the <em>global environment</em>:
    </Text>
    <ArticleImage
      src={imgClosure}
      alt="Figure 8. A closure."
      caption="Figure 8. A closure."
      maxW="400px"
    />
    <Text mb={4}>
      We can see that an environment references a function, which in turn
      reference the environment <em>back</em>.
    </Text>
    <Definition>
      <strong>Def. 14: Closure:</strong> A <em>closure</em> is a function which{' '}
      <em>captures the environment</em> where it&apos;s <em>defined</em>.
      Further this environment is used for <em>identifier resolution</em>.
    </Definition>
    <ArticleNote>
      <strong>Note:</strong> a function is <em>called</em> in a{' '}
      <em>fresh activation environment</em> which stores{' '}
      <em>local variables</em>, and <em>arguments</em>. The{' '}
      <em>parent environment</em> of the activation environment is set to the{' '}
      <em>closured environment</em> of the function, resulting to the{' '}
      <em>lexical scope</em> semantics.
    </ArticleNote>
    <Text mb={4}>
      The second sub-type of the Funarg problem is known as the{' '}
      <strong>
        <em>upwards funarg problem</em>
      </strong>
      . The only difference here is that a capturing environment{' '}
      <em>outlives</em> the context which creates it.
    </Text>
    <Text mb={2}>Let&apos;s see the example:</Text>
    <CodeBlock>{`function foo() {
  let x = 10;

  // Closure, capturing environment of \`foo\`.
  function bar() {
    return x;
  }

  // Upward funarg.
  return bar;
}

let x = 20;

// Call to \`foo\` returns \`bar\` closure.
let bar = foo();

bar(); // 10, not 20!`}</CodeBlock>
    <Text mb={4}>
      Again, technically it doesn&apos;t differ from the same exact mechanism of
      capturing the definition environment. Just in this case, hadn&apos;t we
      have the closure, the activation environment of <Code>foo</Code>{' '}
      <em>would be destroyed</em>. But we <em>captured</em> it, so it{' '}
      <em>cannot be deallocated</em>, and is preserved — to support{' '}
      <em>static scope</em> semantics.
    </Text>
    <Text mb={4}>
      Often there is an incomplete understanding of closures — usually
      developers think about closures only in terms of the upward funarg problem
      (and practically it really makes more sense). However, as we can see, the
      technical mechanism for the <em>downwards</em> and{' '}
      <em>upwards funarg problem</em> is <em>exactly the same</em> — and is the{' '}
      <em>mechanism of the static scope</em>.
    </Text>
    <Text mb={4}>
      As we mentioned above, similarly to prototypes, the same parent
      environment can be <em>shared</em> across <em>several</em> closures. This
      allows accessing and mutating the shared data:
    </Text>
    <CodeBlock>{`function createCounter() {
  let count = 0;

  return {
    increment() { count++; return count; },
    decrement() { count--; return count; },
  };
}

let counter = createCounter();

console.log(
  counter.increment(), // 1
  counter.decrement(), // 0
  counter.increment(), // 1
);`}</CodeBlock>
    <Text mb={4}>
      Since both closures, <Code>increment</Code> and <Code>decrement</Code>,
      are created within the scope containing the <Code>count</Code> variable,
      they <em>share</em> this <em>parent scope</em>. That is, capturing always
      happens <em>&ldquo;by-reference&rdquo;</em> — meaning the{' '}
      <em>reference</em> to the <em>whole parent environment</em> is stored.
    </Text>
    <Text mb={4}>We can see this on the following picture:</Text>
    <ArticleImage
      src={imgSharedEnvironment}
      alt="Figure 9. A shared environment."
      caption="Figure 9. A shared environment."
      maxW="600px"
    />
    <Text mb={4}>
      Some languages may capture <em>by-value</em>, making a copy of a captured
      variable, and do not allow changing it in the parent scopes. However in
      JS, to repeat, it is always the <em>reference</em> to the parent scope.
    </Text>
    <ArticleNote>
      <strong>Note:</strong> implementations may optimize this step, and do not
      capture the whole environment. Capturing <em>only used</em>{' '}
      free-variables, they though still maintain invariant of mutable data in
      parent scopes.
    </ArticleNote>
    <Text mb={4}>
      So all identifiers are statically scoped. There is however <em>one</em>{' '}
      value which is <em>dynamically scoped</em> in ECMAScript. It&apos;s the
      value of <Code>this</Code>.
    </Text>

    {/* ── 7. This ── */}
    <SectionHeading id="this">This</SectionHeading>
    <Text mb={4}>
      The <Code>this</Code> value is a special object which is{' '}
      <em>dynamically</em> and <em>implicitly</em> passed to the code of a
      context. We can consider it as an <em>implicit extra parameter</em>, which
      we can access, but cannot mutate.
    </Text>
    <Text mb={4}>
      The purpose of the <Code>this</Code> value is to execute the same code for
      multiple objects.
    </Text>
    <Definition>
      <strong>Def. 15: This:</strong> an implicit <em>context object</em>{' '}
      accessible from a code of an execution context — in order to apply the
      same code for multiple objects.
    </Definition>
    <Text mb={4}>
      The major use-case is the class-based OOP. An instance method (which is
      defined on the prototype) exists in <em>one exemplar</em>, but is{' '}
      <em>shared</em> across <em>all the instances</em> of this class.
    </Text>
    <CodeBlock>{`class Point {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  getX() {
    return this._x;
  }

  getY() {
    return this._y;
  }
}

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);

// Can access \`getX\`, and \`getY\` from
// both instances (they are passed as \`this\`).

console.log(
  p1.getX(), // 1
  p2.getX(), // 3
);`}</CodeBlock>
    <Text mb={4}>
      When the <Code>getX</Code> method is activated, a new environment is
      created to store local variables and parameters. In addition,{' '}
      <em>function environment record</em> gets the{' '}
      <Code>{'[[ThisValue]]'}</Code> passed, which is bound <em>dynamically</em>{' '}
      depending how a function is <em>called</em>. When it&apos;s called with{' '}
      <Code>p1</Code>, the <Code>this</Code> value is exactly <Code>p1</Code>,
      and in the second case it&apos;s <Code>p2</Code>.
    </Text>
    <Text mb={4}>
      Another application of <Code>this</Code>, is{' '}
      <em>generic interface functions</em>, which can be used in <em>mixins</em>{' '}
      or <em>traits</em>.
    </Text>
    <Text mb={4}>
      In the following example, the <Code>Movable</Code> interface contains
      generic function <Code>move</Code>, which expects the users of this mixin
      to implement <Code>_x</Code>, and <Code>_y</Code> properties:
    </Text>
    <CodeBlock>{`// Generic Movable interface (mixin).
let Movable = {

  /**
   * This function is generic, and works with any
   * object, which provides \`_x\`, and \`_y\` properties,
   * regardless of the class of this object.
   */
  move(x, y) {
    this._x = x;
    this._y = y;
  },
};

let p1 = new Point(1, 2);

// Make \`p1\` movable.
Object.assign(p1, Movable);

// Can access \`move\` method.
p1.move(100, 200);

console.log(p1.getX()); // 100`}</CodeBlock>
    <Text mb={4}>
      As an alternative, a mixin can also be applied at <em>prototype level</em>{' '}
      instead of <em>per-instance</em> as we did in the example above.
    </Text>
    <Text mb={4}>
      Just to show the dynamic nature of <Code>this</Code> value, consider this
      example, which we leave to a reader as an exercise to solve:
    </Text>
    <CodeBlock>{`function foo() {
  return this;
}

let bar = {
  foo,

  baz() {
    return this;
  },
};

// \`foo\`
console.log(
  foo(),       // global or undefined

  bar.foo(),   // bar
  (bar.foo)(), // bar

  (bar.foo = bar.foo)(), // global
);

// \`bar.baz\`
console.log(bar.baz()); // bar

let savedBaz = bar.baz;
console.log(savedBaz()); // global`}</CodeBlock>
    <Text mb={4}>
      Since only by looking at the source code of the <Code>foo</Code> function
      we <em>cannot tell</em> what value of <Code>this</Code> will it have{' '}
      <em>in a particular call</em>, we say that <Code>this</Code> value is{' '}
      <em>dynamically scoped</em>.
    </Text>
    <Text mb={4}>
      The{' '}
      <strong>
        <em>arrow functions</em>
      </strong>{' '}
      are special in terms of <Code>this</Code> value: their <Code>this</Code>{' '}
      is <em>lexical (static)</em>, but <em>not dynamic</em>. I.e. their
      function environment record{' '}
      <em>
        does not provide <Code>this</Code> value
      </em>
      , and it&apos;s taken from the <em>parent environment</em>.
    </Text>
    <CodeBlock>{`var x = 10;

let foo = {
  x: 20,

  // Dynamic \`this\`.
  bar() {
    return this.x;
  },

  // Lexical \`this\`.
  baz: () => this.x,

  qux() {
    // Lexical this within the invocation.
    let arrow = () => this.x;

    return arrow();
  },
};

console.log(
  foo.bar(), // 20, from \`foo\`
  foo.baz(), // 10, from global
  foo.qux(), // 20, from \`foo\` and arrow
);`}</CodeBlock>
    <Text mb={4}>
      Like we said, in the <em>global context</em> the <Code>this</Code> value
      is the <em>global object</em> (the <em>binding object</em> of the{' '}
      <em>global environment record</em>). Previously there was only one global
      object. In current version of the spec there might be{' '}
      <em>multiple global objects</em> which are part of <em>code realms</em>.
      Let&apos;s discuss this structure.
    </Text>

    {/* ── 8. Realm ── */}
    <SectionHeading id="realm">Realm</SectionHeading>
    <Text mb={4}>
      Before it is evaluated, all ECMAScript code must be associated with a{' '}
      <em>realm</em>. Technically a realm just provides a global environment for
      a context.
    </Text>
    <Definition>
      <strong>Def. 16: Realm:</strong> A <em>code realm</em> is an object which
      encapsulates a separate <em>global environment</em>.
    </Definition>
    <Text mb={4}>
      When an <em>execution context</em> is <em>created</em> it&apos;s{' '}
      <em>associated</em> with a particular <em>code realm</em>, which provides
      the <em>global environment</em> for this context. This association further{' '}
      <em>stays unchanged</em>.
    </Text>
    <ArticleNote>
      <strong>Note:</strong> a direct realm equivalent in browser environment is
      the <Code>iframe</Code> element, which exactly provides a custom global
      environment. In Node.js it is close to the sandbox of the{' '}
      <Link href="https://nodejs.org/api/vm.html" isExternal>
        vm module
      </Link>
      .
    </ArticleNote>
    <Text mb={4}>
      Logically though, each context from the stack is always associated with
      its realm:
    </Text>
    <ArticleImage
      src={imgContextRealm}
      alt="Figure 10. A context and realm association."
      caption="Figure 10. A context and realm association."
      maxW="400px"
    />
    <Text mb={2}>
      Let&apos;s see the separate realms example, using the <Code>vm</Code>{' '}
      module:
    </Text>
    <CodeBlock>{`const vm = require('vm');

// First realm, and its global:
const realm1 = vm.createContext({x: 10, console});

// Second realm, and its global:
const realm2 = vm.createContext({x: 20, console});

// Code to execute:
const code = \`console.log(x);\`;

vm.runInContext(code, realm1); // 10
vm.runInContext(code, realm2); // 20`}</CodeBlock>
    <Text mb={4}>
      Now we&apos;re getting closer to the bigger picture of the ECMAScript
      runtime. Yet however we still need to see the <em>entry point</em> to the
      code, and the <em>initialization process</em>. This is managed by the
      mechanism of <em>jobs</em> and <em>job queues</em>.
    </Text>

    {/* ── 9. Job ── */}
    <SectionHeading id="job">Job</SectionHeading>
    <Text mb={4}>
      Some operations can be postponed, and executed as soon as there is an
      available spot on the execution context stack.
    </Text>
    <Definition>
      <strong>Def. 17: Job:</strong> A <em>job</em> is an abstract operation
      that initiates an ECMAScript computation when <em>no other</em> ECMAScript
      computation is currently in progress.
    </Definition>
    <Text mb={4}>
      Jobs are enqueued on the{' '}
      <strong>
        <em>job queues</em>
      </strong>
      , and in current spec version there are two job queues:{' '}
      <strong>
        <em>ScriptJobs</em>
      </strong>
      , and{' '}
      <strong>
        <em>PromiseJobs</em>
      </strong>
      .
    </Text>
    <Text mb={4}>
      And <em>initial job</em> on the <em>ScriptJobs</em> queue is the{' '}
      <em>main entry point</em> to our program — initial script which is loaded
      and evaluated: a realm is created, a global context is created and is
      associated with this realm, it&apos;s pushed onto the stack, and the
      global code is executed.
    </Text>
    <Text mb={4}>
      Further this context can execute <em>other contexts</em>, or enqueue{' '}
      <em>other jobs</em>. An example of a job which can be spawned and enqueued
      is a <em>promise</em>.
    </Text>
    <Text mb={4}>
      When there is <em>no running</em> execution context and the execution
      context stack is <em>empty</em>, the ECMAScript implementation removes the
      first <em>pending job</em> from a job queue, creates an execution context
      and starts its execution.
    </Text>
    <ArticleNote>
      <strong>Note:</strong> the job queues are usually handled by the
      abstraction known as the{' '}
      <strong>
        <em>&ldquo;Event loop&rdquo;</em>
      </strong>
      . ECMAScript standard doesn&apos;t specify the event loop, leaving it up
      to implementations.
    </ArticleNote>
    <Text mb={2}>Example:</Text>
    <CodeBlock>{`// Enqueue a new promise on the PromiseJobs queue.
new Promise(resolve => setTimeout(() => resolve(10), 0))
  .then(value => console.log(value));

// This log is executed earlier, since it's still a
// running context, and job cannot start executing first
console.log(20);

// Output: 20, 10`}</CodeBlock>
    <Text mb={4}>
      The{' '}
      <em>
        <strong>async functions</strong>
      </em>{' '}
      can <em>await</em> for promises, so they also enqueue promise jobs:
    </Text>
    <CodeBlock>{`async function later() {
  return await Promise.resolve(10);
}

(async () => {
  let data = await later();
  console.log(data); // 10
})();

// Also happens earlier, since async execution
// is queued on the PromiseJobs queue.
console.log(20);

// Output: 20, 10`}</CodeBlock>

    {/* ── 10. Agent ── */}
    <SectionHeading id="agent">Agent</SectionHeading>
    <Text mb={4}>
      The <em>concurrency</em> and <em>parallelism</em> is implemented in
      ECMAScript using <em>Agent pattern</em>. The Agent pattern is very close
      to the{' '}
      <Link href="https://en.wikipedia.org/wiki/Actor_model" isExternal>
        Actor pattern
      </Link>{' '}
      — a <em>lightweight process</em> with <em>message-passing</em> style of
      communication.
    </Text>
    <Definition>
      <strong>Def. 18: Agent:</strong> An <em>agent</em> is an abstraction
      encapsulating execution context stack, set of job queues, and code realms.
    </Definition>
    <Text mb={4}>
      Implementation dependent an agent can run on the same thread, or on a
      separate thread. The <Code>Worker</Code> agent in the browser environment
      is an example of the <em>Agent</em> concept.
    </Text>
    <Text mb={4}>
      The agents are <em>state isolated</em> from each other, and can
      communicate by <em>sending messages</em>. Some data can be shared though
      between agents, for example <Code>SharedArrayBuffer</Code>s. Agents can
      also combine into <em>agent clusters</em>.
    </Text>
    <Text mb={4}>
      In the example below, the <Code>index.html</Code> calls the{' '}
      <Code>agent-smith.js</Code> worker, passing shared chunk of memory:
    </Text>
    <CodeBlock>{`// In the \`index.html\`:

// Shared data between this agent, and another worker.
let sharedHeap = new SharedArrayBuffer(16);

// Our view of the data.
let heapArray = new Int32Array(sharedHeap);

// Create a new agent (worker).
let agentSmith = new Worker('agent-smith.js');

agentSmith.onmessage = (message) => {
  // Agent sends the index of the data it modified.
  let modifiedIndex = message.data;

  // Check the data is modified:
  console.log(heapArray[modifiedIndex]); // 100
};

// Send the shared data to the agent.
agentSmith.postMessage(sharedHeap);`}</CodeBlock>
    <Text mb={2}>And the worker code:</Text>
    <CodeBlock>{`// agent-smith.js

/**
 * Receive shared array buffer in this worker.
 */
onmessage = (message) => {
  // Worker's view of the shared data.
  let heapArray = new Int32Array(message.data);

  let indexToModify = 1;
  heapArray[indexToModify] = 100;

  // Send the index as a message back.
  postMessage(indexToModify);
};`}</CodeBlock>
    <Text mb={4}>So below is the picture of the ECMAScript runtime:</Text>
    <ArticleImage
      src={imgAgents1}
      alt="Figure 11. ECMAScript runtime."
      caption="Figure 11. ECMAScript runtime."
      maxW="500px"
    />
    <Text mb={4}>
      And that is it; that&apos;s what happens under the hood of the ECMAScript
      engine!
    </Text>
    <Text mb={4}>
      Now we come to an end. This is the amount of information on JS core which
      we can cover within an overview article. Like we mentioned, JS code can be
      grouped into <em>modules</em>, properties of objects can be tracked by{' '}
      <Code>Proxy</Code> objects, etc, etc. — there are many user-level details
      which you can find in different documentations on JavaScript language.
    </Text>
    <Text mb={4}>
      Here though we tried to represent the <em>logical structure</em> of an
      ECMAScript program itself, and hopefully it clarified these details.
    </Text>
    <Divider my={6} />
  </Box>
)

export default ContentEN
