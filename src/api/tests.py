import unittest
import json
from django.test import Client
from .cache import GENE_CACHE


class TestApp(unittest.TestCase):
    def test_genes_list(self):
        client = Client()
        response_gene_list = client.get('/api/find_all_genes/')
        genes = json.loads(response_gene_list.content)["genes"]
        gene_list = list(GENE_CACHE.keys())
        self.assertEqual(response_gene_list.status_code, 200)
        self.assertEqual(len(genes), len(gene_list))

    def test_variants_list(self):
        client = Client()
        response_variants_list = client.get('/api/find_all_variants/?q=CDKL5')
        variants = json.loads(response_variants_list.content)["variants"]
        self.assertEqual(response_variants_list.status_code, 200)
        self.assertEqual(len(variants), len(GENE_CACHE["CDKL5"]))
