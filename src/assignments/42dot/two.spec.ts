class FriendNode {
  userId: string;
  friends: Set<string>;

  constructor(userId: string) {
    this.userId = userId;
    this.friends = new Set();
  }

  setFriend(userId: string) {
    this.friends.add(userId);
  }

  get friendsRaw() {
    return [...this.friends];
  }
}

function solution2(friends: string[][], userId: string): string[] {
  // friendMap 구성
  const friendMap = new Map<string, FriendNode>();
  for (const [source, target] of friends) {
    let sourceNode = friendMap.get(source);
    if (!sourceNode) {
      sourceNode = new FriendNode(source);
      friendMap.set(source, sourceNode);
    }
    sourceNode.setFriend(target);

    let targetNode = friendMap.get(target);
    if (!targetNode) {
      targetNode = new FriendNode(target);
      friendMap.set(target, targetNode);
    }
    targetNode.setFriend(source);
  }

  // mutual friend 구하기
  const target = friendMap.get(userId);
  const friendsOfTarget = target.friendsRaw;

  let max = 0;
  let likelyFriends = [];
  for (const node of friendMap.values()) {
    if (node.userId === userId || target.friends.has(node.userId)) {
      continue;
    }

    let mutualFriendCount = 0;
    for (const friendOfTarget of friendsOfTarget) {
      if (node.friends.has(friendOfTarget)) {
        mutualFriendCount++;
      }
    }

    if (mutualFriendCount > max) {
      max = mutualFriendCount;
      likelyFriends = [node.userId];
    } else if (mutualFriendCount === max) {
      likelyFriends.push(node.userId);
    }
  }

  return likelyFriends.sort();
}

it('two', () => {
  const result = solution2(
    [
      ['david', 'demi'],
      ['frank', 'demi'],
      ['demi', 'james'],
    ],
    'frank',
  );
  console.log(result);
});
