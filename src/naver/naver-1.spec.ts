enum ISSUE {
  DELIVERY = 'Delivery',
  SOFTWARE = 'Software',
  HARDWARE = 'Hardware',
  COMPLAINT_ON_GUARANTEE = 'Guarantee',
  NOT_KNOWN = 'Not known',
}

enum SOLUTION {
  GIVE_DELIVERY_DATE = 'Your delivery date is dd/mm/yy',
  ADVISE_ON_PROGRAM = 'Click the top-right button',
  FIX_THE_CPU = 'Change CPU fan',
  PREPARE_THE_REFUND = 'Preparing your refund',
  CANNOT_HELP = 'We are sorry, we cannot help you',
}

class ClientRequest {
  issue: ISSUE;
  constructor(issue: ISSUE) {
    this.issue = issue;
  }

  getIssue() {
    return this.issue;
  }
}

abstract class Chain {
  nextChain?: Chain;
  abstract handleRequest(request: ClientRequest): SOLUTION;
}

class CallCenter extends Chain {
  constructor(nextChain?: Chain) {
    super();
    this.nextChain = nextChain;
  }

  handleRequest(request: ClientRequest): SOLUTION {
    const issue = request.getIssue();
    if (issue === ISSUE.DELIVERY) {
      return SOLUTION.GIVE_DELIVERY_DATE;
    }

    return this.nextChain.handleRequest(request);
  }
}

class IT extends Chain {
  constructor(nextChain?: Chain) {
    super();
    this.nextChain = nextChain;
  }

  handleRequest(request: ClientRequest): SOLUTION {
    const issue = request.getIssue();
    if (issue === ISSUE.SOFTWARE) {
      return SOLUTION.ADVISE_ON_PROGRAM;
    }

    return this.nextChain.handleRequest(request);
  }
}

class Service extends Chain {
  constructor(nextChain?: Chain) {
    super();
    this.nextChain = nextChain;
  }

  handleRequest(request: ClientRequest): SOLUTION {
    const issue = request.getIssue();
    if (issue === ISSUE.HARDWARE) {
      return SOLUTION.FIX_THE_CPU;
    }

    return this.nextChain.handleRequest(request);
  }
}

class Management extends Chain {
  handleRequest(request: ClientRequest): SOLUTION {
    const issue = request.getIssue();
    if (issue === ISSUE.COMPLAINT_ON_GUARANTEE) {
      return SOLUTION.PREPARE_THE_REFUND;
    }

    if (issue === ISSUE.NOT_KNOWN) {
      return SOLUTION.CANNOT_HELP;
    }

    return SOLUTION.CANNOT_HELP;
  }
}

const buildChain = () => {
  const management = new Management();
  const service = new Service(management);
  const itCenter = new IT(service);
  const callCenter = new CallCenter(itCenter);

  return {
    callCenter,
    itCenter,
    service,
    management,
  };
};

export {
  ISSUE,
  SOLUTION,
  ClientRequest,
  Chain,
  CallCenter,
  IT,
  Service,
  Management,
  buildChain,
};

it('coding-test', () => {
  const { callCenter } = buildChain();

  const testCases = [
    { issue: ISSUE.DELIVERY, expected: SOLUTION.GIVE_DELIVERY_DATE },
    { issue: ISSUE.SOFTWARE, expected: SOLUTION.ADVISE_ON_PROGRAM },
    { issue: ISSUE.HARDWARE, expected: SOLUTION.FIX_THE_CPU },
    {
      issue: ISSUE.COMPLAINT_ON_GUARANTEE,
      expected: SOLUTION.PREPARE_THE_REFUND,
    },
    { issue: ISSUE.NOT_KNOWN, expected: SOLUTION.CANNOT_HELP },
  ];

  testCases.forEach(({ issue, expected }) => {
    const request = new ClientRequest(issue);
    const result = callCenter.handleRequest(request);

    console.log(issue, result);

    console.assert(
      result === expected,
      `For issue ${issue}, expected ${expected} but got ${result}`,
    );
  });
});
