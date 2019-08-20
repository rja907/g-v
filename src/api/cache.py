"""
This script will run once when the serve runs.
It uses the csv module to go through all the rows.
For every single row, it will ignore the rows that do not have either gene or nucleotide_change listed.
For the rows that have both of them listed, it will check if the key (gene) exists in the cache.
	If the key (gene) exists in the cache, the details will be appended to the values of the key.
	If the key (gene) does not exist in the cache, a new key, value pair will be created in the cache.
"""

import csv
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

GENE_CACHE = {}


def create_cache():
    print("Ran once!")
    with open(f'{BASE_DIR}/data/variants.tsv', 'r', encoding=None) as tsvin:
        tsvin = csv.reader(tsvin, delimiter='\t')
        for row in tsvin:
            current = {
                'gene': row[0],
                'nucleotide_change': row[1],
                'protein_change': row[2],
                'other_mappings': row[3],
                'alias': row[4],
                'transcripts': row[5],
                'region': row[6],
                'reported_classification': row[7],
                'inferred_classification': row[8],
                'source': row[9],
                'last_evaluated': row[10],
                'last_updated': row[11],
                'url': row[12],
                'submitter_comment': row[13]
                # 'assembly': row[14],
                # 'chr': row[15],
                # 'genomic_start': row[16],
                # 'genomic_stop': row[17],
                # 'ref': row[18],
                # 'alt': row[19],
                # 'accession': row[20],
                # 'reported_ref': row[21],
                # 'reported_alt': row[22]
            }
            if row[0] != "" and row[1] != "" and row[0] not in GENE_CACHE:
                GENE_CACHE[row[0]] = [current]
            elif row[0] != "" and row[1] != "":
                GENE_CACHE[row[0]].append(current)
    return GENE_CACHE
