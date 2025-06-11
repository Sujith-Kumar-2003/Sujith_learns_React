import hashlib
from randcrack import RandCrack

# Assuming you've installed randcrack: pip install randcrack

# Load 624 observed values from hashed outputs (here: you MUST reverse the hash externally or already know 624 outputs)
# We simulate this for now by generating them (you'll replace this part)
import random
seed = "0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4"
random.seed(seed)
observed_numbers = [random.getrandbits(32) for _ in range(624)]

# Initialize randcrack
rc = RandCrack()

# Feed 624 full 32-bit outputs
for num in observed_numbers:
    rc.submit(num)

# Now we can predict the next outputs
print("Predicted future outputs:")
for _ in range(10):
    pred = rc.predict_getrandbits(32)
    print(f"Next 32-bit number: {pred}")

# Predict a full 256-bit value (as in your original code)
bit_chunks = [rc.predict_getrandbits(32) for _ in range(8)]
full_number = 0
for chunk in bit_chunks:
    full_number = (full_number << 32) | chunk

# Get hash to check if it matches any of the known ones
predicted_hash = hashlib.sha256(str(full_number).encode()).hexdigest()

print(f"\nPredicted 256-bit number: {full_number}")
print(f"SHA-256 hash: {predicted_hash}")
import hashlib
import random

# Fixed seed
seed = "0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4"
random.seed(seed)

# Set of known hashes to match
known_hashes = {
    "54b74afc496d7dc7c33ae0412d7563870e3b15141818249cd0e856f85e1b172d",
    "02b577d11b589a16e641c734b6346beace5e82960f805efcdd05a5a0f39fc452",
    "01f3c5d9d0a0c8e13b50eff770967e0987578c491050206864fc0f1188b41098",
    "91e9879fde2f9fd82dbee0479a1f549cafe4330e706bbb4058b44133807fdb6c",
    "787abfae5a72ae8b316755adee60503835d939bcc30c396d7e83809c43a6c161"
}

# Brute force the next N outputs
for i in range(10000):
    num = random.getrandbits(256)
    hash_val = hashlib.sha256(str(num).encode()).hexdigest()
    if hash_val in known_hashes:
        print(f"\n✅ Match Found!")
        print(f"Index      : {i}")
        print(f"Number     : {num}")
        print(f"SHA-256    : {hash_val}")
